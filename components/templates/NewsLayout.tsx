import { FC, ReactNode } from 'react'
import { Navbar, Footer, LeftIcons } from '../organisms'

type Props = {
  children: ReactNode
}

export const NewsLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <LeftIcons />
      {children}
      <Footer />
    </>
  )
}
