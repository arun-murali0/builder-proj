import { User } from '@domain/entities/user';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(input: User): Promise<User>;
  update(id: string, input: Partial<User>): Promise<void>;
  delete(id: string): Promise<void>;
  getAll(): Promise<{ id: string; email: string }[]>;
}
