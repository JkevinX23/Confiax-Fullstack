import styled, { css } from 'styled-components'

export const Pie = styled.div`
 -webkit-tap-highlight-color: transparent;
  background: #000;
  border-radius: 50%;
  box-shadow: 0 0 4px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  height: 400px;
  left: -200px;
  position: absolute;
  top: -200px;
  width: 400px;
  transform: translateX(-200px) translateY(-200px);
  transition: transform 300ms;
`
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  .card {
    left: 216px;
    position: absolute;
    top: 300px;
    width: 46px;
}
.discount {
  left: 288px;
  position: absolute;
  top: 258px;
  width: 46px;
}
.cart {
  left: 324px;
  position: absolute;
  top: 188px;
  width: 46px;
}
.menu {
  -webkit-tap-highlight-color: transparent;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 4px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  height: 200px;
  left: -100px;
  position: absolute;
  top: -100px;
  width: 200px;
}
.hamburger {
  cursor: pointer;
  height: 46px;
  left: 58%;
  position: relative;
  top: 58%;
  width: 46px;
}
.hamburger path {
  transition: transform 300ms;
}
.hamburger path:nth-child(1) {
  transform-origin: 25% 29%;
}
.hamburger path:nth-child(2) {
  transform-origin: 50% 50%;
}
.hamburger path:nth-child(3) {
  transform-origin: 75% 72%;
}
.hamburger path:nth-child(4) {
  transform-origin: 75% 29%;
}
.hamburger path:nth-child(5) {
  transform-origin: 25% 72%;
}
.active .hamburger path:nth-child(1) {
  transform: rotate(45deg);
}
.active .hamburger path:nth-child(2) {
  transform: scaleX(0);
}
.active .hamburger path:nth-child(3) {
  transform: rotate(45deg);
}
.active .hamburger path:nth-child(4) {
  transform: rotate(-45deg);
}
.active .hamburger path:nth-child(5) {
  transform: rotate(-45deg);
}

`

type Icon = {
  active: boolean
}
export const Icon1 = styled.div<Icon>`
${({active}) => css`
  position: absolute;
  top: 0.5rem;
  left: 10rem;
  padding-left: 2rem;
  transform: ${!active && 'translateX(-90px) translateY(-200px)}' };
  transition: transform 350ms;
  cursor: pointer;
`}
`

export const Icon2 = styled.div<Icon>`
${({active}) => css`
  position: absolute;
  top: 12rem;
  left: 0.5rem;
  padding-left: 2rem;
  transform: ${!active && 'translateX(-250px) translateY(-200px)}' };
  transition: transform 250ms;
  cursor: pointer;
`}
`

export const Icon3 = styled.div<Icon>`
${({active}) => css`
  position: absolute;
  top: 7rem;
  left: 8rem;
  padding-left: 2rem;
  transform: ${!active && 'translateX(-250px) translateY(-200px)}' };
  transition: transform 400ms;
  cursor: pointer;
`}
`

