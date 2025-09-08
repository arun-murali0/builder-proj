import { signInSchema, signUpSchema } from '../../../application/validation';
import { container } from '../../../infrastruture/containers';

import { router, procedure } from '../../../infrastruture/lib/trpc';

const userRouter = router({
  signIn: procedure.input(signInSchema).mutation(() => {
    // Implement the logic for signing in a user
  }),
  signUp: procedure.input(signUpSchema).mutation(async (opts) => {
    await container.signUpController.execute(opts.input.body);
  }),
});

export default userRouter;
