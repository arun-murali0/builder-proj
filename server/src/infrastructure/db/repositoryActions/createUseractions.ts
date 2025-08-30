import DatabaseActions from "../createClient";
import { UserRepository } from "../../../domain/repository/auth/userRepository";
import { UserEntity } from "../../../domain/entities/user";

const TABLE = "users";

const userRepositoryActions: UserRepository = {
  async findUserById(id: string): Promise<UserEntity | null> {
    const { data, error } = await DatabaseActions.from(TABLE)
      .select("*")
      .eq("id", id)
      .single();

    return error || !data ? null : (data as UserEntity);
  },

  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const { data, error } = await DatabaseActions.from(TABLE)
      .insert(user)
      .select()
      .single();

    if (error || !data) throw new Error("Failed to create user");
    return data as UserEntity;
  },

  async findUserByEmail(email: string): Promise<UserEntity | null> {
    const { data, error } = await DatabaseActions.from(TABLE)
      .select("*")
      .eq("email", email)
      .single();

    return error || !data ? null : (data as UserEntity);
  },

  async updateUser(
    id: string,
    user: Partial<UserEntity>,
  ): Promise<UserEntity | null> {
    const { data, error } = await DatabaseActions.from(TABLE)
      .update(user)
      .eq("id", id)
      .select()
      .single();

    return error || !data ? null : (data as UserEntity);
  },

  async deleteUser(id: string): Promise<boolean> {
    const { error } = await DatabaseActions.from(TABLE).delete().eq("id", id);
    return !error;
  },

  async getAllUsers(): Promise<UserEntity[]> {
    const { data, error } = await DatabaseActions.from(TABLE).select("*");
    return error || !data ? [] : (data as UserEntity[]);
  },
};

export default userRepositoryActions;
