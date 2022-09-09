import { useReducer, FC, ReactNode } from 'react'
import Cookies from 'js-cookie'

import { AuthContext, authReducer } from './'
import { newsAPI } from '../../api'
import { IUser } from '../../interfaces'

interface Props {
  children: ReactNode
}

export interface AuthStateProps {
  user?: IUser
  isLogged: boolean
}

const AUTH_INITIAL_STATE: AuthStateProps = {
  user: undefined,
  isLogged: false,
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

  const loginUser = async (email: string, password: string) => {
    try {
      const { data } = await newsAPI.post('/user/login', { email, password })
      const { token, user } = data
      Cookies.set('token', token)
      dispatch({ type: 'LOGIN', payload: user })

      return true
    } catch (error) {
      return false
    }
  }

  const logoutUser = () => {
    Cookies.remove('token')
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider value={{ ...state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}
