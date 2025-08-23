import { router, publicProcedure } from "../trpcInit";
import { signinSchema, signupSchema } from "../../../domain/validators";

import { userController } from "../controllers/auth/userController";

export const authRouter = () =>
  router({
    signup: publicProcedure
      .input(signupSchema)
      .mutation(({ input }) => userController.newUser(input)),
    login: publicProcedure
      .input(signinSchema)
      .mutation(({ input }) => userController.userLogin(input)),
    // logout: publicProcedure.input().mutation(({ input }) => {}),
    // refreshToken: publicProcedure.input().mutation(({ input }) => {}),
    // forgotPassword: publicProcedure.input().mutation(({ input }) => {}),
    // resetPassword: publicProcedure.input().mutation(({ input }) => {}),
    // verifyEmail: publicProcedure.input().mutation(({ input }) => {}),
    // resendVerificationEmail: publicProcedure
    //   .input()
    //   .mutation(({ input }) => {}),
  });
