import { router } from "@/infrastruture/lib/trpc";
import userRouter from "@/interface/http/routers/userRouter";

export const initRouter = router({
  authRouter: userRouter,
});

export type INITRouter = typeof initRouter;
