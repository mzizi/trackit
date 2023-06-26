import { protectedProcedure, t } from "@/server/createRouter";

import { getMeHandler } from "@/server/controllers/user.controller";

const userRouter = t.router({
  getMe: protectedProcedure.query(({ ctx }) => getMeHandler({ ctx })),
});

export default userRouter;
