import { useRouter } from "next/router";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/lib/axios";

import FormInputField from "./element/form-input";
import { SigninFormValues, SigninSchema } from "@/types/zod/zodSchema";

export default function SigninForm() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(SigninSchema),
  });

  const onSubmit = async (values: SigninFormValues) => {
    try {
      const response = await axiosInstance.post("/auth/login", values);

      if (response.data.statusCode == 200) return router.push("/");
    } catch (error) {
      reset();
      toast({
        variant: "destructive",
        title: "Invalid Email or Password",
        description: "Please check your email and password and try again.",
      });
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4 mt-6">
          <div className="grid gap-[1fr,auto,1fr]">
            <FormInputField<SigninFormValues>
              id={"email"}
              label={"email"}
              labelstyle={"mb-2"}
              placeholder={"m@example.com"}
              register={register}
              error={errors.email}
            />
          </div>
          <div className="grid gap-[1fr,auto,1fr]">
            <FormInputField<SigninFormValues>
              id={"password"}
              label={"password"}
              labelstyle={"mb-2"}
              register={register}
              type="password"
              error={errors.password}
            />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm flex gap-2">
          <p>Dont have an account?</p>
          <Link
            href="/signup"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Sign up
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
