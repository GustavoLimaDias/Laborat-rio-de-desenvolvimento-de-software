import { createTheme } from '@mui/material/styles'

// Token system — identidade "painel industrial / HMI"
// Grafite profundo + aço + âmbar de sinalização (referência a painéis de controle
// industrial, coerente com a área de atuação do Gustavo: backend + sistemas industriais)
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#14181C',
      paper: '#1C2228',
    },
    primary: {
      main: '#F2A93B', // âmbar de sinalização — usado com moderação, para CTAs e destaques
      contrastText: '#14181C',
    },
    secondary: {
      main: '#4C7A9C', // azul aço — cor de apoio, links e ícones
    },
    success: {
      main: '#6FBF73',
    },
    text: {
      primary: '#E7EAEE',
      secondary: '#8792A2',
    },
    divider: '#2A313A',
  },
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    h1: { fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: '-0.02em' },
    h2: { fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 },
    h4: { fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 },
    overline: {
      fontFamily: "'IBM Plex Mono', monospace",
      letterSpacing: '0.12em',
    },
    button: {
      fontFamily: "'IBM Plex Mono', monospace",
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
})

export default theme
