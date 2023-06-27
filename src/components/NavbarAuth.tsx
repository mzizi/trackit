import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

import { Button, buttonVariants } from "@/components/ui/button";
import useStore from "@/store";
import { trpc } from "@/utils/trpc";

const NavbarAuth = () => {
  const router = useRouter();
  const store = useStore();

  const user = store?.authUser;

  const queryClient = useQueryClient();
  const { mutate: logoutUser } = trpc.logoutUser.useMutation({
    onSuccess(data) {
      queryClient.clear();
      document.location.href = "/login";
    },
    onError(error) {
      toast(error.message, {
        type: "error",
        position: "top-right",
      });
      queryClient.clear();
      router.push("/login");
    },
  });

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <div className="flex items-center justify-center gap-8 w-max">
          <Link
            href="/profile"
            className={buttonVariants({ className: "text-sm w-full" })}
          >
            Profile
          </Link>
          <Button
            variant="outline"
            className="w-full text-sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-8 w-max">
          <Link
            href="/register"
            className={buttonVariants({
              variant: "outline",
              className: "text-sm w-full",
            })}
          >
            Register
          </Link>
          <Link
            href="/login"
            className={buttonVariants({ className: "text-sm w-full" })}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarAuth;
