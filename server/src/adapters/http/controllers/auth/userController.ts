import { SigninInput, SignupInput } from "../../../../domain/validators";
import newUserDto from "../../../../use-cases/Dto/user/newUserDto";

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
};

export const userController = {
  newUser: async (input: SignupInput): Promise<ApiResponse<SignupInput>> => {
    await newUserDto(input);
    return {
      success: true,
      message: "User created successfully",
      data: input,
    };
  },

  userLogin: async (input: SigninInput): Promise<ApiResponse<SigninInput>> => {
    return {
      success: true,
      message: "User logged in successfully",
      data: input,
    };
  },
};
