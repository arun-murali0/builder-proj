import { IUserRepository } from "@/domain/repositories/userRepository";
import { User } from "@/domain/entities/user";

export interface IUserPort extends IUserRepository {
  createApartInfo(): Promise<User | null>;
}
