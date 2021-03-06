import React, { useCallback } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { HandlesProvider } from './context/handles';
import usePersistedState from './hooks/usePersistedState';

import './config/ReactotronConfig';

import Routes from './routes';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { store, persistor } from './store';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <HandlesProvider toggleTheme={toggleTheme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </PersistGate>
        </Provider>
      </HandlesProvider>
    </ThemeProvider>
  );
};

export default App;
