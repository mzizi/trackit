import { t } from "@/lib/server/createRouter";
import authRouter from "@/lib/server/routers/auth.routes";
import userRouter from "@/lib/server/routers/user.routes";
import redisClient from "@/lib/server/utils/connectRedis";

const publicRouter = t.router({
  getHello: t.procedure.query(async ({ ctx }) => {
    const message = await redisClient.get("tRPC");
    return { message };
  }),
});

export const appRouter = t.mergeRouters(publicRouter, authRouter, userRouter);

export type AppRouter = typeof appRouter;
