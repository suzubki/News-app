import { IUser } from '../../interfaces'
import { AuthStateProps } from './'

type AuthActionProps =
  | {
      type: 'LOGIN'
      payload: IUser
    }
  | {
      type: 'LOGOUT'
    }

export const authReducer = (
  state: AuthStateProps,
  action: AuthActionProps
): AuthStateProps => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: undefined,
        isLogged: false,
      }
    default:
      return state
  }
}
