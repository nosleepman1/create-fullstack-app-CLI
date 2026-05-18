import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { RegisterDto, LoginDto, AuthResponse } from '../../../shared/types';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(data: RegisterDto): Promise<AuthResponse> {
    const { name, email, password } = data;

    if (!password) {
      throw new BadRequestException('Password is required');
    }

    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { message: 'User created successfully', user: { id: user.id, name: user.name, email: user.email } };
  }

  async login(data: LoginDto): Promise<AuthResponse> {
    const { email, password } = data;

    if (!password) {
      throw new BadRequestException('Password is required');
    }

    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return { message: 'User logged in successfully', token, user: { id: user.id, name: user.name, email: user.email } };
  }

  async logout(): Promise<AuthResponse> {
    return { message: 'User logged out successfully. Please clear your token on the client side.' };
  }
}
