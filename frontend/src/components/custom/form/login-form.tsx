import { useRouter } from "next/router";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/lib/axios";

import { LoginFormValues, loginSchema } from "@/types/zod/zodSchema";

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await axiosInstance.post("/auth/login", values);

      if (response.data.statusCode == 200) return router.push("/dashboard");
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
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("email")}
            />
            <p className="text-destructive text-sm h-4">
              {errors.email?.message}
            </p>
          </div>
          <div className="grid gap-[1fr,auto,1fr]">
            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <Input id="password" type="password" {...register("password")} />
            <p className="text-destructive text-sm h-4">
              {errors.password?.message}
            </p>
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm flex gap-2">
          <p>Dont have an account?</p>
          <Link
            href="/"
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
