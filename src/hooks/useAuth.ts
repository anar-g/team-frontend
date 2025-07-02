import { LOGIN_MUTATION, REGISTER_MUTATION } from '@/graphql/mutations/user'
import { LoginData, LoginVars, RegisterData, RegisterVars } from '@/types/auth'
import { MutationHookOptions, useMutation } from '@apollo/client'
import { toast } from 'sonner'

export function useRegister(options?: MutationHookOptions<RegisterData, RegisterVars>) {
  return useMutation<RegisterData, RegisterVars>(REGISTER_MUTATION, {
    ...options,
    onError: (error) => {
      toast.error(error.message || 'Registration failed')
      options?.onError?.(error)
    },
    onCompleted: (data) => {
      toast.success(`Welcome, ${data.register.name}! Registration successful.`)
      options?.onCompleted?.(data)
    },
  })
}

export function useLogin(options?: MutationHookOptions<LoginData, LoginVars>) {
  return useMutation<LoginData, LoginVars>(LOGIN_MUTATION, {
    ...options,
    onError: (error) => {
      toast.error(error.message || 'Login failed')
      options?.onError?.(error)
    },
    onCompleted: (data) => {
      toast.success(`Welcome, ${data.login.user.name}!`)
      options?.onCompleted?.(data)
    },
  })
}
