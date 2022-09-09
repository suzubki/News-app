import { createContext } from 'react'
import { IUser } from '../../interfaces'

interface ContextProps {
  user?: IUser
  isLogged: boolean

  loginUser: (email: string, password: string) => Promise<boolean>
  logoutUser: () => void
}

export const AuthContext = createContext({} as ContextProps)
