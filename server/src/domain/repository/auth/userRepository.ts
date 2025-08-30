import { UserEntity } from "../../entities/user";

export interface UserRepository {
  findUserById(id: string): Promise<UserEntity | null>;
  createUser(user: Partial<UserEntity>): Promise<UserEntity>;
  findUserByEmail(email: string): Promise<UserEntity | null>;
  updateUser(id: string, user: Partial<UserEntity>): Promise<UserEntity | null>;
  deleteUser(id: string): Promise<boolean>;
  getAllUsers(): Promise<UserEntity[]>;
}
