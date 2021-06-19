import ReactCardFlip from 'react-card-flip';
import AuthContext from 'Api/Reducer/Auth'
import { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import * as S from './styles'
import CircularMenu from 'components/Menu'
import TableUsers from 'components/Table'
import CreateAccount from 'components/Form'
import Footer from 'components/Footer';


export default function Home() {
  const { signed } = useContext(AuthContext)

  const [menu, setMenu] = useState(1)

  useEffect(() => {
    if(!signed) Router.push('/Login')
  }, [signed])

    return (
     signed &&
     <S.Wrapper>
       <S.Menu>
         <CircularMenu setMenu={setMenu} />
       </S.Menu>
      <ReactCardFlip isFlipped={menu === 1 ? false : true } flipDirection="vertical">

        <S.Form>
          <CreateAccount />
        </S.Form>

        <S.Table>
            <TableUsers selected={ menu !== 1 } />
        </S.Table>

      </ReactCardFlip>
      <Footer />
     </S.Wrapper>
    )
  }
