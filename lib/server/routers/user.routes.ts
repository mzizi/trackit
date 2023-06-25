import { protectedProcedure, t } from "@/lib/server/createRouter";
import { getMeHandler } from "@/lib/server/controllers/user.controller";

const userRouter = t.router({
  getMe: protectedProcedure.query(({ ctx }) => getMeHandler({ ctx })),
});

export default userRouter;
