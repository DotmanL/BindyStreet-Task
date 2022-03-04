import React from 'react';

interface IColorModeContext {
  toggleColorMode: () => void;
  // mode: 'dark' | 'light';
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
});
