import { UIState } from './'

type UIActionType =
  | {
      type: 'UI_SEARCH_OPEN'
    }
  | {
      type: 'UI_SEARCH_CLOSE'
    }
  | {
      type: 'UI_SEARCH_TOGGLE'
    }
  | {
      type: 'UI_HAMBURGER_OPEN'
    }
  | {
      type: 'UI_HAMBURGER_CLOSE'
    }
  | {
      type: 'UI_HAMBURGER_TOGGLE'
    }

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI_SEARCH_OPEN':
      return { ...state, searchIsOpen: true }
    case 'UI_SEARCH_CLOSE':
      return { ...state, searchIsOpen: false }
    case 'UI_SEARCH_TOGGLE':
      return { ...state, searchIsOpen: !state.searchIsOpen }

    case 'UI_HAMBURGER_OPEN':
      return { ...state, hamburgerIsOpen: true }
    case 'UI_HAMBURGER_CLOSE':
      return { ...state, hamburgerIsOpen: false }
    case 'UI_HAMBURGER_TOGGLE':
      return { ...state, hamburgerIsOpen: !state.hamburgerIsOpen }

    default:
      return { ...state }
  }
}
