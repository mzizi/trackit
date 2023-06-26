import { FC, ReactNode } from "react";
import { useQueryClient } from "@tanstack/react-query";

import useStore from "@/store";
import { trpc } from "@/utils/trpc";

import type { IUser } from "@/types";

type AuthMiddlewareProps = {
  children: ReactNode;
  requireAuth?: boolean;
  enableAuth?: boolean;
};

const AuthMiddleware: FC<AuthMiddlewareProps> = ({
  children,
  requireAuth,
  enableAuth,
}) => {
  const store = useStore();
  const queryClient = useQueryClient();
  const query = trpc.refreshAccessToken.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: false,
    retry: false,
    onError(error: any) {
      store.setPageLoading(false);
      document.location.href = "/login";
    },
    onSuccess(data: any) {
      store.setPageLoading(false);
      queryClient.refetchQueries(["users.me"]);
    },
    trpc: {
      context: {
        skipBatch: true,
      },
    },
  });
  const { isLoading, isFetching } = trpc.getMe.useQuery(undefined, {
    retry: false,
    enabled: enableAuth,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: (data) => {
      store.setPageLoading(false);
      store.setAuthUser(data.data.user as unknown as IUser);
    },
    onError(error) {
      store.setPageLoading(false);
      if (error.message.includes("must be logged in")) {
        query.refetch({ throwOnError: true });
      }
    },
    trpc: {
      context: {
        skipBatch: true,
      },
    },
  });

  return <>{children}</>;
};

export default AuthMiddleware;
