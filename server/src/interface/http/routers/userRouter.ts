import { router, procedure } from '@/infrastruture/lib/trpc';

export const userRouter = router({
  signUp: procedure.mutation(() => {
    return 'user created';
  }),
});
