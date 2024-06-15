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
import { SignupFormValues, signupSchema } from "@/types/zod/zodSchema";
import WarningBanner from "./element/warning-banner";

export default function SignupForm() {
  const router = useRouter();
  // const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (values: SignupFormValues) => {
    console.log(errors.repeatpassword?.message);
    console.log(values);

    // try {
    //   const response = await axiosInstance.post("/auth/login", values);

    //   if (response.data.statusCode == 200) return router.push("/");
    // } catch (error) {
    //   // reset();
    //   // toast({
    //   //   variant: "destructive",
    //   //   title: "Invalid Email or Password",
    //   //   description: "Please check your email and password and try again.",
    //   // });
    // }
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-3 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  type="text"
                  placeholder="John"
                  {...register("firstname", {
                    required: true,
                  })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Doe"
                  {...register("lastname", {
                    required: true,
                  })}
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email", {
                  required: true,
                })}
                required
              />
              <WarningBanner>{errors.email?.message}</WarningBanner>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
            <WarningBanner>{errors.password?.message}</WarningBanner>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repeat-password">Repeat Password</Label>
              <Input
                id="repeat-password"
                type="password"
                {...register("repeatpassword", {
                  required: true,
                })}
              />
            </div>
            <WarningBanner>{errors.repeatpassword && errors.repeatpassword.message}</WarningBanner>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardContent>
        </form>
      </Card>
    </>
  );
}
