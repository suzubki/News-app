import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { UIProvider } from '../context'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default MyApp
