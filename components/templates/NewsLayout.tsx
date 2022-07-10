import { FC, ReactNode } from 'react'
import { Navbar, Footer } from '../organisms'

type Props = {
  children: ReactNode
}

export const NewsLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
