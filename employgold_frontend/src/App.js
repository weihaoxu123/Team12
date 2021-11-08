import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { routes } from "./views/routes";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#f77f00",
    },
  },
  typography: {
    h4: { fontFamily: "Ubuntu" },
    h5: { fontFamily: "Ubuntu" },
    body1: { fontFamily: "Ubuntu" },
    body2: { fontFamily: "Ubuntu" },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
