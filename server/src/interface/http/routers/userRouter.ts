import { router, procedure } from '@/infrastruture/lib/trpc';

export const userRouter = router({
  create: procedure.mutation(() => {
    return 'user created';
  }),
});
