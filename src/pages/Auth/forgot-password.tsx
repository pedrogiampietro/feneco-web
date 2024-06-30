import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyIcon, LockIcon, MailIcon } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
        <CardDescription>
          Follow the steps to reset your password.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MailIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium">Enter Email</div>
              <p className="text-muted-foreground">
                Enter the email associated with your account.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <KeyIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium">Verify Code</div>
              <p className="text-muted-foreground">
                Check your email for a verification code.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <LockIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium">Reset Password</div>
              <p className="text-muted-foreground">
                Create a new secure password.
              </p>
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <Button onClick={() => setStep(2)} className="w-full">
              Send Reset Instructions
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button onClick={() => setStep(3)} className="w-full">
              Verify Code
            </Button>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" required />
            </div>
            <Button
              onClick={() => setStep(1)}
              variant="outline"
              className="w-full"
            >
              Back
            </Button>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className={`h-2 w-8 rounded-full ${
                step === 1 ? "bg-primary" : "bg-muted"
              }`}
            />
            <div
              className={`h-2 w-8 rounded-full ${
                step === 2 ? "bg-primary" : "bg-muted"
              }`}
            />
            <div
              className={`h-2 w-8 rounded-full ${
                step === 3 ? "bg-primary" : "bg-muted"
              }`}
            />
          </div>
          <div className="text-sm text-muted-foreground ml-4">
            Step <strong>{step}</strong> of <strong>3</strong>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
