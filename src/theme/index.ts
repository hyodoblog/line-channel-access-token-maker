import { createTheme } from '@mui/material/styles'

export const themeColor = {
  primary: '#EB7100',
  error: '#EB4E3F'
}

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: themeColor.primary
    },
    error: {
      main: themeColor.error
    }
  },
  typography: {
    fontFamily: 'Roboto'
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12
        }
      }
    }
  }
})
