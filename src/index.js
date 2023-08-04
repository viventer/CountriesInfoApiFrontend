import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalElements/styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = {
  colors: {
    darkBlue: "#001219A",
    blue: "#005f73",
    lightBlue: "#0a9396",
    veryLightBlue: "#94d2bd",
    cream: "#e9d8a6",
    orange: "ee9b00",
    darkOrange: "ca6702",
    veryDarkOrange: "bb3e03",
    red: "ae2012jkA",
    claret: "9b2226",
    darkGray: "#181818",
  },
};
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
