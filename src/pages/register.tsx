import { GetServerSideProps } from "next";

import Banner from "@/components/Banner";
import RegisterForm from "@/components/forms/RegisterForm";

import { NextPageWithLayout } from "./_app";

const RegisterPage: NextPageWithLayout = () => {
  return (
    <div className="container grid w-full h-[75vh] grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Banner />
      </div>
      <div className="flex items-center justify-center">
        <RegisterForm />
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

export default RegisterPage;
