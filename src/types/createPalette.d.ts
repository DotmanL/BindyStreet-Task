// eslint-disable-next-line no-unused-vars
import { PaletteMode } from '@mui/material';

declare module '@mui/material' {
  // eslint-disable-next-line no-shadow
  export interface Palette {
    mainBackground: {
      color: string;
    };
  }
}
