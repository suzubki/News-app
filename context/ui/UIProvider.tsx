import { FC, ReactNode, useReducer } from 'react'
import { UIContext, UIReducer } from './'

interface Props {
  children: ReactNode
}

export interface UIState {
  hamburgerIsOpen: boolean
  searchIsOpen: boolean
}

const INITIAL_STATE: UIState = {
  hamburgerIsOpen: false,
  searchIsOpen: false,
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, INITIAL_STATE)

  const openSearch = () => {
    dispatch({ type: 'UI_SEARCH_OPEN' })
    dispatch({ type: 'UI_HAMBURGER_CLOSE' })
  }
  const closeSearch = () => dispatch({ type: 'UI_SEARCH_CLOSE' })
  const toggleSearch = () => dispatch({ type: 'UI_SEARCH_TOGGLE' })

  const openHamburger = () => {
    dispatch({ type: 'UI_HAMBURGER_OPEN' })
    dispatch({ type: 'UI_SEARCH_CLOSE' })
  }
  const closeHamburger = () => dispatch({ type: 'UI_HAMBURGER_CLOSE' })
  const toggleHamburger = () => dispatch({ type: 'UI_HAMBURGER_TOGGLE' })

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Search Icon
        openSearch,
        closeSearch,
        toggleSearch,

        // Hamburger Icon
        openHamburger,
        closeHamburger,
        toggleHamburger,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
