import React from 'react';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Brightness7, Brightness4 } from '@mui/icons-material';

import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from './ColorContext';

export default () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Toolbar variant="dense">
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
    </Toolbar>
  );
};
