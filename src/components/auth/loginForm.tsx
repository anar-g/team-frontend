import { useLogin } from "../../hooks/useAuth";
import { z } from "zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema } from "./schema";

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const formHook = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();
  const [login, { data, loading, error }] = useLogin();

  const onSubmit = async (values: LoginSchema) => {
    await login({ variables: values });
  };

  return (
    <Form {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={formHook.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="email" placeholder="Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formHook.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="password" placeholder="Password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading} className="w-full">
          Login
        </Button>

        <Button
          variant={"ghost"}
          onClick={() => router.push("/register")}
          className="w-full"
        >
          Register
        </Button>
        {error && <div className="text-red-800">{error.message}</div>}
        {data && (
          <div className="text-green-500">Welcome, {data.login.user.name}</div>
        )}
      </form>
    </Form>
  );
}
