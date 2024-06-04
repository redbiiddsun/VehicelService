import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/lib/axios";

const LoginForm = () => {
	const schema = z.object({
		email: z.string().email(),
		password: z.string().min(8),
	});

	type FormValues = z.infer<typeof schema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (values: FormValues) => {
		console.log(values);

		// TODO - make a request to the backend
		// const res = axiosInstance("", {});
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
					<p>Don't have an account?</p>
					{/* TODO - set proper link to sign up page */}
					<Link
						href="#"
						className="font-medium underline underline-offset-4"
						prefetch={false}
					>
						Sign up
					</Link>
				</CardFooter>
			</form>
		</Card>
	);
};

export default LoginForm;
