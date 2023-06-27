import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import useStore from "@/store";
import { IUser } from "@/types";
import { trpc } from "@/utils/trpc";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type ILoginInput = z.TypeOf<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const store = useStore();

  const [pwdVisible, setPwdVisible] = useState(false);

  const form = useForm<ILoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const query = trpc.getMe.useQuery(undefined, {
    enabled: false,
    onSuccess: (data) => {
      store.setAuthUser(data.data.user as unknown as IUser);
    },
  });

  const { isLoading, mutate: loginUser } = trpc.loginUser.useMutation({
    onSuccess(data) {
      toast("Logged in successfully", {
        type: "success",
        position: "top-right",
      });
      query.refetch();
      router.push("/app");
    },
    onError(error) {
      toast(error.message, {
        type: "error",
        position: "top-right",
      });
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = form;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<ILoginInput> = (values) => {
    // 👇 Executing the loginUser Mutation
    loginUser(values);
  };

  return (
    <div className="grid items-center w-3/4 mx-auto border rounded-md shadow-md h-max border-border">
      <div className="container flex flex-col justify-center gap-10 p-8">
        <h1 className="text-xl font-semibold">Sign in to your account</h1>
        <Form {...form}>
          <form
            className="flex flex-col flex-1 w-full gap-4"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="test@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative z-0">
                      <Input
                        {...field}
                        className="z-0 px-4"
                        placeholder={
                          pwdVisible ? "strongPword123" : "xxxxxxxxxxxx"
                        }
                        type={pwdVisible ? "text" : "password"}
                      />
                      <Button
                        variant="outline"
                        onClick={() => setPwdVisible((prev) => !prev)}
                        className="p-0 absolute top-[50%] translate-y-[-50%] rounded-md flex items-center justify-center right-2"
                      >
                        <div className="w-10 p-2 text-lg aspect-square">
                          {pwdVisible ? <Icons.eyeOn /> : <Icons.eyeOff />}
                        </div>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-end w-full py-2">
              <Link
                href="/register"
                className={buttonVariants({
                  variant: "link",
                  className: "text-indigo-800 dark:text-indigo-200",
                })}
              >
                New around here ?&nbsp;
                <span className="font-semibold capitalize">Register</span>
              </Link>
            </div>

            <Button
              size="lg"
              type="submit"
              disabled={isLoading}
              className="w-full text-lg"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
