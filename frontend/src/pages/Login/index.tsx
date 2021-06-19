import { useContext, useState } from 'react'
import * as S from './styles'
import AuthContext from 'Api/Reducer/Auth'
import Footer from 'components/Footer'

const Login = () => {
  const { signIn } = useContext(AuthContext)

  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  async function handleLogin() {
    await signIn({ email, password })
  }
  return (
    <S.Wrapper>
        <S.Card>
            <S.Title>Acesso</S.Title>
            <S.Form>
            <S.Field>   <S.Input type="text" value={email} onChange={e => setEmail(e.target.value)}  required />  <S.Label>Email</S.Label> </S.Field>
            <S.Field>   <S.Input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>   <S.Label>Senha</S.Label> </S.Field>
            <S.Field>   <S.Button onClick={() => handleLogin()}>Entrar</S.Button> </S.Field>
            </S.Form>
            <p>Não tem uma conta? Solicite seu cadastro há algum associado. </p>
        </S.Card>
        <Footer />
    </S.Wrapper>
  )
}

export default Login
