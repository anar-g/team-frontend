export interface RegisterData {
  register: {
    id: string
    name: string
    email: string
  }
}
export interface RegisterVars {
  name: string
  email: string
  password: string
}

export interface LoginData {
  login: {
    token: string
    user: {
      id: string
      name: string
      email: string
    }
  }
}

export interface LoginVars {
  email: string
  password: string
}
