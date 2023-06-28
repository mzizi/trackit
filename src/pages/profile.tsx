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
    <section className="grid items-center justify-center w-full h-full">
      <div className="max-w-4xl mx-auto rounded-md h-[20rem] flex justify-center items-center">
        <div>
          <p className="text-5xl font-semibold">Profile Page</p>
          <div className="grid gap-4 my-8">
            <p className="font-medium">ID: {user?.id}</p>
            <p className="font-medium">Name: {user?.name}</p>
            <p className="font-medium">Email: {user?.email}</p>
            <p className="font-medium">Role: {user?.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

ProfilePage.layout = "app";

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
