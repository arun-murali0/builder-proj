import {
  authenticateUser,
  sanitizeUser,
  UserEntity,
} from "../../../domain/entities/user";
import { SignInInput } from "../../../domain/validators/auth/signin";
import supabaseClient from "../../../infrastructure/db/createClient";
import { UserRepository } from "../../../domain/repository/auth/userRepository";
import {
  UserNotFoundError,
  PasswordMismatchError,
} from "../../../domain/exceptions/domainErrors";

export const SignInUseCase = async (
  userData: SignInInput,
  repository: UserRepository,
): Promise<UserEntity | null> => {
  const existingUser = await repository.findUserByEmail(userData.email);

  if (!existingUser) {
    throw new UserNotFoundError();
  }

  const data = await supabaseClient.auth.signInWithPassword({
    email: userData.email,
    password: userData.password,
  });

  console.log("login data", data);

  const isValid = authenticateUser(existingUser, userData.password);

  if (!isValid) {
    throw new PasswordMismatchError();
  }

  return sanitizeUser(existingUser) as UserEntity;
};
