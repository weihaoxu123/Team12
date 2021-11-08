import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { routes } from "./views/routes";
import { Box } from "@mui/system";
function App() {
  return (
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
  );
}

export default App;
