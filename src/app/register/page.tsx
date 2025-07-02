import RegisterForm from '@/components/auth/registerForm'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
