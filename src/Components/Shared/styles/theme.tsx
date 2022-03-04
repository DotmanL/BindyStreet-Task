import {
  deepOrange, grey, cyan,
} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: cyan,
        mainBackground: {
          color: 'lightseagreen',
        },
        divider: grey[800],
        background: {
          default: 'white',
          paper: 'whitesmoke',
        },
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        primary: deepOrange,
        mainBackground: {
          color: '#ff8c00',
        },
        divider: grey[800],
        background: {
          default: '#121212',
          paper: grey[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
  spacing: (value: number) => `${value * 10}px`,
  typography: {
    fontFamily: [
      'Montserrat',
      'Montserrat Alternates',
      'Nunito',
      'Roboto',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 900,
  },
});
