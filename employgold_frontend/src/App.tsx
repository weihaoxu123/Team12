import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IRoutes, routes } from './routes/routes';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#f77f00',
    },
  },
  typography: {
    h4: { fontFamily: 'Ubuntu' },
    h5: { fontFamily: 'Ubuntu' },
    body1: { fontFamily: 'Ubuntu' },
    body2: { fontFamily: 'Ubuntu' },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <Routes>
          {routes.map((route: IRoutes) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
