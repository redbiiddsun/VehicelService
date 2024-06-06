/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3oRqJ06mgZb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import HeaderComponent from "@/components/custom/header"
import RegisterForm from "@/components/custom/form/register-form"

export default function RegisterPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <HeaderComponent title="Register" description="Create a new account to get started."/>
        <RegisterForm />
      </div>
    </div>
  )
}
