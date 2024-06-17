import { Card } from "@/components/ui/card";
import { SignUpForm } from "./components/sign-up-form";
import { Link } from "react-router-dom";
import LogoImg from "@/assets/logo.png";

export default function SignUp() {
  return (
    <>
      <div className="container grid h-svh flex-col items-center justify-center bg-slate-900 lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div className="mb-4 flex items-center justify-center">
            <img src={LogoImg} alt="Faneco Logo" className="h-16 w-16" />
            <h1 className="text-xl font-medium">Faneco</h1>
          </div>
          <Card className="p-6">
            <div className="mb-2 flex flex-col space-y-2 text-left">
              <h1 className="text-lg font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password to create an account. <br />
                Already have an account?{" "}
                <Link
                  to="/"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Sign In
                </Link>
              </p>
            </div>
            <SignUpForm />
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
              By creating an account, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
