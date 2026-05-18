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
