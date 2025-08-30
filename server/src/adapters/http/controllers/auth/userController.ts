import { SignInInput, SignupInput } from "../../../../domain/validators";
import { SignupUseCase } from "../../../../use-cases/useCases/auth/SignupUseCase";
import { SignInUseCase } from "../../../../use-cases/useCases/auth/signInusecase";

import userRepositoryActions from "../../../../infrastructure/db/repositoryActions/createUseractions";
import { UserRepository } from "../../../../domain/repository/auth/userRepository";

// Create the repository instance (injected dependency)
const userRepository: UserRepository = userRepositoryActions;

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
};

export const userController = {
  newUser: async (
    input: SignupInput,
  ): Promise<ApiResponse<SignupInput | null>> => {
    const user = await SignupUseCase(input, userRepository);
    return {
      success: true,
      message: "User created successfully",
      data: user,
    };
  },

  userLogin: async (
    input: SignInInput,
  ): Promise<ApiResponse<SignInInput | null>> => {
    const user = await SignInUseCase(input, userRepository);
    return {
      success: true,
      message: "User logged in successfully",
      data: user,
    };
  },
};
