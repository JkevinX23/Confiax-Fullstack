import api from 'services/api'
import { LoginProps, LoginResponseProps } from 'types'

export const postLogin = async (data: LoginProps) =>
  api.post<LoginResponseProps>('/session', data)
