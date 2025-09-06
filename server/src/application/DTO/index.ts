import { Role } from '@/domain/types';

export interface signUpInputDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNumber: string;
  role?: Role;
}

export interface signUpOutputDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  mobileNumber: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
