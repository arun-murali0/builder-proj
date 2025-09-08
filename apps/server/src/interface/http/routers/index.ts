import { router } from '../../../infrastruture/lib/trpc';
import userRouter from './userRouter';

export const initRouter = router({
  authRouter: userRouter,
});

export type INITRouter = typeof initRouter;
