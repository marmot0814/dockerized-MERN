import { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline'

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export default function Theme({ children }) {
  const [mode, setMode] = useState(
    localStorage.getItem('mode') || 'light'
  );
  
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#28A1C2',
      },
      secondary: red,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            width: "10px"
          },
          "*::-webkit-scrollbar-thumb": {
            borderRadius: "2px"
          }
        }
      }
    }
  });

  const toggleColorMode = () => {
    const flipColorMode = (prev) => prev === 'light' ? 'dark' : 'light';
    localStorage.setItem('mode', flipColorMode(mode));
    setMode((prev) => flipColorMode(prev));
  }

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}