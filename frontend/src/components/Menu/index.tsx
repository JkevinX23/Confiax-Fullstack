import { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import * as S from './styles'
import Image from 'next/image'
import AuthContext from 'Api/Reducer/Auth'

type CircularProps = {
  setMenu: (option: number) => void
}

export default function CircularMenu({ setMenu }: CircularProps) {
  const { signOut } = useContext(AuthContext)

  const [active, setActive] = useState(false)

  function Toogle(param: boolean){
    toast.warn(param)
    setActive(param)
  }

    return (
     <S.Wrapper>
      <div className={active ? "menu active" : " menu "} onClick={() => Toogle(!active)}>
        <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <g
                fill="none"
                stroke="#000"
                strokeWidth="7.999"
                strokeLinecap="round"
              >
                <path d="M 55,26.000284 L 24.056276,25.999716" />
                <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
                <path d="M 45,73.999716 L 75.943724,74.000284" />
                <path d="M 75.943724,26.000284 L 45,25.999716" />
                <path d="M 24.056276,73.999716 L 55,74.000284" />
              </g>
            </svg>
      </div>

      <S.Icon1 active={active} onClick={() => setMenu(1)}>
        <Image src="/img/sharing.webp" width="64"  height="64" alt="icon"/>
      </S.Icon1>

      <S.Icon2 active={active} onClick={() => setMenu(2)}>
        <Image src="/img/list.webp" width="64"  height="64" alt="icon"/>
      </S.Icon2>

      <S.Icon3 active={active} onClick={() => signOut()}>
        <Image src="/img/logout.webp" width="64"  height="64" alt="icon"/>
      </S.Icon3>

     </S.Wrapper>
    )
  }
