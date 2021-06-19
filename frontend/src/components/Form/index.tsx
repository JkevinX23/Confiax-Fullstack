import { postUser } from 'Api/Users'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { contactMask } from 'utils/Masks'
import { isContact, isEmail } from 'utils/Validation'
import * as S from './styles'

const CreateAccount = () => {
  const [ email, setEmail] = useState('')
  const [ name, setName] = useState('')
  const [ contact, setContact] = useState('')
  const [ password, setPassword] = useState('')
  const [ confirm_password, setConfirm_password] = useState('')
  const [ loading, setLoading] = useState(false)

  async function createUser() {
    if(loading) return

    if(!name){
      toast.warn("Informe seu nome para continuar. ")
      return
    }

    if(!password) {
      toast.warn("Informe uma senha para continuar. ")
      return
    }

    if(!contact) {
      toast.warn("Informe um número para contato. ")
      return
    }

    if(confirm_password !== password){
      toast.warn("Suas senhas não coincidêm.")
      setPassword("")
      setConfirm_password("")
    }

    if(password.length < 6 ){
      toast.warn("Sua senha deve ter pelo menos 6 dígitos. ")
      setPassword("")
      setConfirm_password("")
    }

    if(!email || !isEmail(email)){
      toast.warn("Email inválido")
      setEmail("")
    }

    try{
        setLoading(true)
        await postUser({name, email, contact, password})
        toast.success("Usuário criado com sucesso.")
    }
      catch(err)  {
        console.error(err)
        toast.error("Erro ao criar usuário. ")
    }
      finally {
        setLoading(false)
      }
  }


  return (
    <S.Wrapper>
        <S.Title>Criar Usuário</S.Title>
        <S.Form>

          <S.Row>
            <S.Field>   <S.Input type="text" value={name} onChange={e => setName(e.target.value)} required/>   <S.Label>Nome</S.Label> </S.Field>
            <S.Field>   <S.Input type="text" value={email} onChange={e => setEmail(e.target.value)}  required />  <S.Label>Email</S.Label> </S.Field>
          </S.Row>

          <S.Field>   <S.Input type="text" value={contact} onChange={e => e.target.value.length < 16 && setContact(contactMask(e.target.value))} required/>   <S.Label>Contato</S.Label> </S.Field>

          <S.Row>
            <S.Field>   <S.Input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>   <S.Label>Senha</S.Label> </S.Field>
            <S.Field>   <S.Input type="password" value={confirm_password} onChange={e => setConfirm_password(e.target.value)} required/>   <S.Label>Confirmação</S.Label> </S.Field>
          </S.Row>

           <button onClick={() => createUser()}>Confirmar</button>

        </S.Form>

    </S.Wrapper>
  )
}

export default CreateAccount
