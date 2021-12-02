import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IRoutes, routes } from './routes/routes';
import UserContextProvider from './contexts/UserContext';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#f77f00',
    },
  },
  typography: {
    h1: { fontFamily: 'Ubuntu' },
    h2: { fontFamily: 'Ubuntu' },
    h3: { fontFamily: 'Ubuntu' },
    h4: { fontFamily: 'Ubuntu' },
    h5: { fontFamily: 'Ubuntu' },
    h6: { fontFamily: 'Ubuntu' },
    body1: { fontFamily: 'Ubuntu' },
    body2: { fontFamily: 'Ubuntu' },
    caption: { fontFamily: 'Ubuntu' },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            {routes.map((route: IRoutes) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
