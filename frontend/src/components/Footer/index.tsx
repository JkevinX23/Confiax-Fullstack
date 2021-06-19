import Image from 'next/image'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>

     <S.Icons>
        <Image src="/img/github.webp" width="32"  height="32" alt="icon" onClick={() => window.open("https://github.com/JkevinX23/",'_blank')}/>
        <Image src="/img/linkedin.webp" width="32"  height="32" alt="icon" onClick={() => window.open("https://www.linkedin.com/in/joao-kevin-gomes-rodrigues/", '_blank')}/>
        <Image src="/img/whatsapp.webp" width="32"  height="32" alt="icon"onClick={() => window.open("https://api.whatsapp.com/send?phone=38999093448", '_blank')}/>
    </S.Icons>

    <S.TextWrapper>
      Desenvolvido por: <a href="/docs/curriculo-joao-kevin.pdf" download>João Kevin Gomes Rodrigues</a>
    </S.TextWrapper>

  </S.Wrapper>
)

export default Footer
