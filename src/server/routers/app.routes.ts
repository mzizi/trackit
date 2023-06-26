import authRouter from "@/server/routers/auth.routes";
import redisClient from "@/server/utils/connectRedis";
import { t } from "@/server/createRouter";
import userRouter from "@/server/routers/user.routes";

const publicRouter = t.router({
  getHello: t.procedure.query(async ({ ctx }) => {
    const message = await redisClient.get("tRPC");
    return { message };
  }),
});

export const appRouter = t.mergeRouters(publicRouter, authRouter, userRouter);

export type AppRouter = typeof appRouter;
