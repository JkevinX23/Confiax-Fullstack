import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    position: absolute;
    width: 100vw;
    bottom: 0;
  `}
`

export const TextWrapper = styled.p`
    color: white;
    font-size: 2rem;
    text-align: center;
    padding-top: 1rem;

    a{
      color: white;
    }
`
export const Icons = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 2rem;
  width: 20rem;
  justify-content: space-between;
  cursor: pointer;
`
