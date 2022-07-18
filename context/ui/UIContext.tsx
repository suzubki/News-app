import { createContext } from 'react'

interface ContextProps {
  hamburgerIsOpen: boolean
  searchIsOpen: boolean

  // Search Icon
  toggleSearch: () => void
  openSearch: () => void
  closeSearch: () => void

  // Hamburger Icon
  openHamburger: () => void
  closeHamburger: () => void
  toggleHamburger: () => void
}

export const UIContext = createContext({} as ContextProps)
