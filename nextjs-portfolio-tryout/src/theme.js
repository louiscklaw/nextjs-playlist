// https://flatuicolors.com/palette/gb

import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: { lighten: '#273c75', main: '#192a56' },
    secondary: { lighten: '#353b48', main: '#2f3640' },
    info: { lighten: '#00a8ff', main: '#0097e6' },
    disabled: { lighten: '#f5f6fa', main: '#dcdde1' },
    danger: { lighten: '#e84118', main: '#c23616' },
    success: { lighten: '#4cd137', main: '#44bd32' },
    warning: { lighten: '#fbc531', main: '#e1b12c' },
    dimmed: { lighten: '#7f8fa6', main: '#718093' },
    deep_background: { lighten: '#f5f6fa', main: '#2f3640', contrastText: '#f5f6fa' },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3rem',
          padding: '1rem 2rem',
          fontFamily: 'Nunito, sans-serif',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito, sans-serif',
        },
      },
    },
  },
})

export default theme
