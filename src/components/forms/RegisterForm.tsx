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
import Link from "next/link";

const registerSchema = z
  .object({
    name: z.string().min(1, "Full name is required").max(100),
    email: z
      .string()
      .min(1, "Email address is required")
      .email("Email Address is invalid"),
    photo: z.string().min(1, "Photo is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export type IRegisterInput = z.TypeOf<typeof registerSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const store = useStore();

  const [pwdVisible, setPwdVisible] = useState(false);

  const form = useForm<IRegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const query = trpc.getMe.useQuery(undefined, {
    enabled: false,
    onSuccess: (data) => {
      store.setAuthUser(data.data.user as unknown as IUser);
    },
  });

  const { isLoading, mutate: registerUser } = trpc.registerUser.useMutation({
    onSuccess(data) {
      toast(`Welcome ${data.data.user.name}!`, {
        type: "success",
        position: "top-right",
      });
      void router.push("/login");
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

  const onSubmitHandler: SubmitHandler<IRegisterInput> = (values) => {
    // 👇 Executing the registerUser Mutation
    registerUser(values);
  };

  return (
    <div className="mx-auto w-[90%] shadow-md rounded-md border border-border bg-gray-100 h-max grid items-center">
      <div className="container flex flex-col justify-center gap-8 p-8">
        <h1 className="text-3xl">Sign up for your account</h1>
        <Form {...form}>
          <form
            className="flex flex-col flex-1 w-full gap-4"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Stephen Chow" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    <div className="relative">
                      <Input
                        {...field}
                        className="px-4"
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
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="px-4"
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

            <div className="flex items-center justify-end w-full">
              <Link
                href="/login"
                className={buttonVariants({ variant: "link" })}
              >
                Already have an account ?&nbsp;
                <span className="font-semibold capitalize">Login</span>
              </Link>
            </div>

            <Button
              size="lg"
              type="submit"
              disabled={isLoading}
              className="w-full text-lg"
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
