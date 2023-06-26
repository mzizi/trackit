import { createUserSchema, loginUserSchema } from "@/server/schema/user.schema";
import {
  loginHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerHandler,
} from "@/server/controllers/auth.controller";

import { t } from "@/server/createRouter";

const authRouter = t.router({
  registerUser: t.procedure
    .input(createUserSchema)
    .mutation(({ input }) => registerHandler({ input })),
  loginUser: t.procedure
    .input(loginUserSchema)
    .mutation(({ input, ctx }) => loginHandler({ input, ctx })),
  logoutUser: t.procedure.mutation(({ ctx }) => logoutHandler({ ctx })),
  refreshAccessToken: t.procedure.query(({ ctx }) =>
    refreshAccessTokenHandler({ ctx })
  ),
});

export default authRouter;
