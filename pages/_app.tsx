import type { AppProps } from 'next/app'
import { AuthProvider } from '../context'

import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp
