export type LoginProps = {
    email: string
    password: string
}

export type UserProps = {
    id: number,
    name: string,
    email: string,
    contact: string
    date_formatted?: string
    createdAt: Date
}


export type UserPostProps = {
  name: string,
  email: string,
  password: string
  contact: string
}

export type LoginResponseProps = {
    user: UserProps,
    token: string
}
