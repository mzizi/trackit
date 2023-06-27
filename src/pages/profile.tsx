import type { GetServerSideProps } from "next";

import useStore from "@/store";
import { IUser } from "@/types";
import { trpc } from "@/utils/trpc";

import type { NextPageWithLayout } from "./_app";

const ProfilePage: NextPageWithLayout = () => {
  const store = useStore();

  const user = store.authUser;
  const query = trpc.getMe.useQuery(undefined, {
    retry: 1,
    onSuccess: (data) => {
      store.setAuthUser(data.data.user as unknown as IUser);
    },
  });

  return (
    <section className="min-h-screen pt-20 bg-ct-blue-600">
      <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
        <div>
          <p className="text-5xl font-semibold">Profile Page</p>
          <div className="mt-8">
            <p className="mb-4">ID: {user?.id}</p>
            <p className="mb-4">Name: {user?.name}</p>
            <p className="mb-4">Email: {user?.email}</p>
            <p className="mb-4">Role: {user?.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!req.cookies.access_token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      requireAuth: true,
      enableAuth: true,
    },
  };
};

export default ProfilePage;
