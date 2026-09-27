import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { FaSteam } from "react-icons/fa";

export function SignInComponent() {
  return (
    <div className="mx-auto w-full max-w-sm space-y-6 px-4 py-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome <span className="text-purple-600 dark:text-purple-400">back.</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Sign in to continue to your account.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="Enter your email address" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-purple-600 hover:underline dark:text-purple-400">
              Reset password
            </a>
          </div>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Keep me signed in
          </label>
        </div>

        <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200">
          Sign In
        </Button>
      </div>

      <div className="relative flex items-center justify-center my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-muted" />
        </div>
        <span className="relative bg-background px-2 text-xs uppercase text-muted-foreground tracking-wider">
          Or continue with
        </span>
      </div>

      <div className="space-y-2">
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <FcGoogle className="h-5 w-5" />
          <span>Continue with Google</span>
        </Button>

        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <FaSteam className="h-5 w-5 text-[#171a21] dark:text-white" />
          <span>Continue with Steam</span>
        </Button>
      </div>

      <div className="text-center text-sm">
        New to our platform?{" "}
        <a href="#" className="font-medium text-purple-600 hover:underline dark:text-purple-400">
          Create Account
        </a>
      </div>
    </div>
  );
}
