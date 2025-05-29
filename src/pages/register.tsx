import RegisterForm from "../components/auth/registerForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
