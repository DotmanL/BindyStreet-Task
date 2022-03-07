// eslint-disable-next-line no-unused-vars
import { PaletteMode } from '@mui/material';
import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme { }
}

declare module '@mui/material' {
  // eslint-disable-next-line no-shadow
  export interface Palette {
    mainBackground: {
      color: string;
    };
  }
}
