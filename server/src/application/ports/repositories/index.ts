import { signUpInputDTO } from '@/application/DTO';

export interface IUserRepository {
  findByEmail(email: string): Promise<{ id: string; email: string } | null>;
  create(input: signUpInputDTO): Promise<{ id: string; email: string }>;
  update(id: string, input: Partial<signUpInputDTO>): Promise<void>;
  delete(id: string): Promise<void>;
  getAll(): Promise<{ id: string; email: string }[]>;
}
