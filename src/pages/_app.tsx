import "@/styles/globals.css";

import DefaultLayout from "@/components/Layout";
import { navLinks } from "@/config";
import { trpc } from "@/utils/trpc";

import type { AppProps, AppType } from "next/app";
import type { ReactElement, ReactNode } from "react";

import type { NextPage } from "next";

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => <DefaultLayout links={navLinks}>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />);
}) as AppType;

export default trpc.withTRPC(MyApp);
