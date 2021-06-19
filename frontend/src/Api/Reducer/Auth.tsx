import { createContext, useState } from 'react'
import { postLogin } from '../Login'
import { UserProps, LoginProps } from 'types'
import Router from 'next/router'
import { toast } from 'react-toastify'


interface IAuthContext {
  signed: boolean
  user: UserProps | null
  signIn: (data: LoginProps) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC = ({ children }: any) => {
  let userJSON = null
  let tokenJSON = null
  let signedJSON = null
  if (process.browser) {
    userJSON = localStorage.getItem('user')
    tokenJSON = localStorage.getItem('token')
    signedJSON = localStorage.getItem('signed')
  }

  const [user, setUser] = useState<UserProps | null>(process.browser ? userJSON !== null && JSON.parse(userJSON) : null)

  const [token, setToken] = useState<string | null>(
    process.browser ? tokenJSON : null
  )
  const [signed, setSigned] = useState(
    process.browser ? signedJSON !== null && JSON.parse(signedJSON) : false
  )

  const signIn = async (payload: LoginProps) => {
    try {
      const { data } = await postLogin({
        email: payload.email,
        password: payload.password
      })

      setUser(data.user)
      setToken(data.token)
      setSigned(true)

      if (process.browser !== null) {
        localStorage.setItem('client', JSON.stringify(data.user))
        localStorage.setItem('token', data.token)
        localStorage.setItem('signed', JSON.stringify(true))
      }
     
      Router.push('/Home')
      toast.success('Seja bem vindo')
    } catch (error) {
      toast.warn('Credenciais inválidas, tente novamente')
      console.log(error)
    }
  }
  function signOut() {
    Router.push('/')
    setUser(null)
    setToken(null)
    setSigned(false)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
