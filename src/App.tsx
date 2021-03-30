import React, { useCallback, useState }  from 'react';
import GlobalStyle from '../src/styles/GlobalStyle';
import Home from './pages/Home'


import {light} from './styles/themes/light';
import {dark} from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { ThemeProvider } from 'styled-components';


const App = () => {
  const [theme, setTheme] = usePersistedState('theme',light);


  const handleSetTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
    
  }, [theme, setTheme]);
  return (
    <>
    <ThemeProvider theme={theme}>

      <Home handleSetTheme={handleSetTheme} />
      <GlobalStyle />
    </ThemeProvider>
      
    </>
  )
}

export default App;