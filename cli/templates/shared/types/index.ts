export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: User;
}

export interface ErrorResponse {
  message: string;
  errors?: any[];
}

export interface RegisterDto {
  name: string;
  email: string;
  password?: string;
}

export interface LoginDto {
  email: string;
  password?: string;
}
