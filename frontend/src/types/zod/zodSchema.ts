import { z } from "zod";

export const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SigninFormValues = z.infer<typeof SigninSchema>;

export const signupSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  repeatpassword: z.string().min(8, 'Repeat Password must be at least 8 characters long'),
}).refine((data) => data.password === data.repeatpassword, {
  message: "Passwords don't match",
  path: ["repeatpassword"],
});

export type SignupFormValues = z.infer<typeof signupSchema>;
