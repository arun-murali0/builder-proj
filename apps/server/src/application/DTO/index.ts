import { Role, UserStatus } from "@/domain/types";

// ----register-----
export interface signUpInputDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNumber: string;
  role?: Role;
  status?: UserStatus;
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

// -----login----
export interface signInInputDTO {
  email: string;
  password: string;
}

export interface signInOutputDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  mobileNumber: string;
}
