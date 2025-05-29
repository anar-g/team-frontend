import LoginForm from "../components/auth/loginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
