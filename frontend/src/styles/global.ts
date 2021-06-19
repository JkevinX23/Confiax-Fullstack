import { createGlobalStyle, css } from 'styled-components'

const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    html {
      font-size: 62.5%;
    }
    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family:  "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
      font-size: 1.6rem;
    }
`

export default GlobalStyled
