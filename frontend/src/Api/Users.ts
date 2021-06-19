import api from 'services/api'
import { UserProps,UserPostProps } from 'types'

export const getUsers = async () =>
  api.get<UserProps[]>('/users')

  export const postUser = async (data: UserPostProps) =>
  api.post('/users', data)
