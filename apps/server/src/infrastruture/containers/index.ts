import { SignUpUser } from "@/application/use-cases/index";
import { UserMapper } from "@/application/mapper/userMapper";
import { UserRepo } from "@/infrastruture/database/repository/userRepo";

import {
  SignUpController,
  // SignInController,
} from "../../interface/http/controllers/userController";
// import { AuthMapper } from '@application/mappers/AuthMapper';

export const container = (() => {
  // Repositories
  const userRepo = new UserRepo();

  // Mappers
  const userMapper = new UserMapper();
  // const authMapper = new AuthMapper();

  // Use Cases
  const signUpUseCase = new SignUpUser(userRepo, userMapper);
  // const signInUseCase = new SignInUser(userRepo, authMapper);

  // Controllers
  const signUpController = new SignUpController(signUpUseCase);
  // const signInController = new SignInController(signInUseCase);

  return {
    userRepo,
    userMapper,
    // authMapper,
    signUpUseCase,
    // signInUseCase,
    signUpController,
    // signInController,
  };
})();
