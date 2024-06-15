import AppIcon from "@/components/icon";
import LoginForm from "@/components/custom/form/login-form";

export default function SigninPage() {
	return (
		<div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
			<div className="w-full max-w-md space-y-6">
				<div className="flex flex-col items-center space-y-2">
					<AppIcon className="h-8 w-8" />
					<h1 className="text-2xl font-bold">Welcome back</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Enter your email and password to sign in.
					</p>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}
