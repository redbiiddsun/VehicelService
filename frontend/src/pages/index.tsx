/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3oRqJ06mgZb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { JSX, SVGProps } from "react"
import { MountainIcon } from "@/components/assets"

export default function LoginPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <MountainIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email and password to sign in.</p>
        </div>
        <Card>
          <CardContent className="space-y-9 mt-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="#" className="font-medium underline underline-offset-4" prefetch={false}>
              Sign up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}



