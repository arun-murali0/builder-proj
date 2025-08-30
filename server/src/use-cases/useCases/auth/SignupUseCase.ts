import {
  createUser,
  sanitizeUser,
  UserEntity,
} from "../../../domain/entities/user";
import { SignupInput } from "../../../domain/validators/auth/signup";
import { UserRepository } from "../../../domain/repository/auth/userRepository";
import { UserAlreadyExistsError } from "../../../domain/exceptions/domainErrors";
import supabaseClient from "../../../infrastructure/db/createClient";

export const SignupUseCase = async (
  userData: SignupInput,
  repository: UserRepository,
): Promise<UserEntity | null> => {
  const existingUser = await repository.findUserByEmail(userData.email);
  if (existingUser) {
    throw new UserAlreadyExistsError();
  }

  const data = await supabaseClient.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  console.log("sign up data", data);

  const newUser = createUser({
    name: userData.name,
    email: userData.email,
    password: userData.password,
  });

  await repository.createUser(newUser);

  return sanitizeUser(newUser) as UserEntity;
};
