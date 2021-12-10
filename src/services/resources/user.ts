import { api } from "../api";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const signIn = async(data: SignInData) => {
  return api.post('/user/signin', data)
}

export const signUp = async(data: SignUpData) => {
  return api.post('/user/signup', data)
}

export const me = async () => {
  return api.get('/user/signup')
}