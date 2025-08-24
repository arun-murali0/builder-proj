import { router, publicProcedure } from "../trpcInit";
import {
  signinSchema,
  signupSchema,
  SigninInput,
  SignupInput,
} from "../../../domain/validators";

import { userController } from "../controllers/auth/userController";

export const authRouter = () =>
  router({
    signup: publicProcedure
      .input(signupSchema)
      .mutation(({ input }) => userController.newUser(input as SignupInput)),
    login: publicProcedure
      .input(signinSchema)
      .mutation(({ input }) => userController.userLogin(input as SigninInput)),
    // logout: publicProcedure.input().mutation(({ input }) => {}),
    // refreshToken: publicProcedure.input().mutation(({ input }) => {}),
    // forgotPassword: publicProcedure.input().mutation(({ input }) => {}),
    // resetPassword: publicProcedure.input().mutation(({ input }) => {}),
    // verifyEmail: publicProcedure.input().mutation(({ input }) => {}),
    // resendVerificationEmail: publicProcedure
    //   .input()
    //   .mutation(({ input }) => {}),
  });
