import { GetServerSideProps } from "next";

import Banner from "@/components/Banner";
import LoginForm from "@/components/forms/LoginForm";

import { NextPageWithLayout } from "./_app";

const LoginPage: NextPageWithLayout = () => {
  return (
    <div className="container grid w-full h-[75vh] grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Banner />
      </div>
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      requireAuth: false,
      enableAuth: false,
    },
  };
};

export default LoginPage;
