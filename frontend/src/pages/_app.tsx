import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { AuthProvider } from 'Api/Reducer/Auth'
import 'react-toastify/dist/ReactToastify.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Confiax - Teste FullStack</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Projeto completo com TypeScript, React, NextJS e Styled Components"
        />
      </Head>
      <GlobalStyles />

      <ToastContainer autoClose={5000} />

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
