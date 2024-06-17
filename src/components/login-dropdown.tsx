import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
  email: string;
  password: string;
};

export function LoginDropdown() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    // Lógica para fazer login
    console.log(data);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Login</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-4">
        <DropdownMenuLabel>Login</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              {...register("email")}
              type="email"
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              {...register("password")}
              type="password"
              className="mt-1 block w-full"
            />
          </div>
          <Button type="submit" className="w-full mt-4">
            Sign In
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
