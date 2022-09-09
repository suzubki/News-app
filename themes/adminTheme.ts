import { createTheme } from '@mui/material'

export const adminTheme = createTheme({
  palette: {
    text: {
      primary: '#616161',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 12,
    caption: {
      fontSize: 16,
      fontWeight: 600,
      color: '#212121',
    },
    allVariants: {
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 800,
    },
  },
})
