import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GithubIcon } from "lucide-react";

export function Signup() {
  return (
    <div className="w-full  lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input id="name" type="text" placeholder="Enter Name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password-confirm">Confirm Password</Label>
              </div>
              <Input id="password-confirm" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <div className="my-6 flex items-center">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-4 text-sm text-gray-500">
                OR CONTINUE WITH
              </span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
            <Button className="w-full" variant="outline">
              <GithubIcon className="h-6 w-6 mr-2" />
              GitHub{"\n              "}
            </Button>
            <Button className="w-full" variant="outline">
              <FaGoogle className="h-5 w-5 mr-2" />
              Google{"\n              "}
            </Button>
            <p className="text-sm text-center mt-4">
              By clicking continue, you agree to our{" "}
              <Link className="text-blue-600" to="/terms">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="text-blue-600" to="/privacy">
                Privacy Policy
              </Link>
              .{"\n              "}
            </p>
          </div>
          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-primary h-full lg:block p-8 text-accent">
        <div className="flex flex-col items-center justify-center h-full ">
          <div className="flex items-center space-x-2 mb-10">
            <img
              alt="Kazifi"
              loading="lazy"
              src="/assets/img/logo-light.svg"
              className="w-48"
            />
          </div>
          <blockquote className="text-sm leading-8 text-center">
            “Elevate your job search, application process, and tracking.
            Transform how you apply for jobs with Kazifi's intelligent
            automation and real-time insights”
          </blockquote>
        </div>
      </div>
    </div>
  );
}
