import { FC, ReactNode } from 'react'
import { UIAdminContext } from './'

interface Props {
  children: ReactNode
}

export const UIAdminProvider: FC<Props> = ({ children }) => {
  return (
    <UIAdminContext.Provider value={{}}>{children}</UIAdminContext.Provider>
  )
}
