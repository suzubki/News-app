import { FC, ReactNode } from 'react'
import { Navbar, Footer, LeftIcons } from '../components/organisms'
import { UIProvider } from '../context'

type Props = {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <UIProvider>
      <main>
        <Navbar />
        <LeftIcons />
        {children}
        <Footer />
      </main>
    </UIProvider>
  )
}
