import "@/styles/globals.css";

import type { NextPage } from "next";
import type { AppProps, AppType } from "next/app";
import type { ReactElement, ReactNode } from "react";

import AppLayout from "@/components/layouts/AppLayout";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { navLinks } from "@/config";
import { trpc } from "@/utils/trpc";

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  layout?: "default" | "app";
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const layout = Component.layout || "default";
  const getLayout =
    Component.getLayout ??
    ((page) => {
      if (layout === "app") {
        return <AppLayout>{page}</AppLayout>;
      } else {
        return <DefaultLayout links={navLinks}>{page}</DefaultLayout>;
      }
    });

  return getLayout(<Component {...pageProps} />);
}) as AppType;

export default trpc.withTRPC(MyApp);
