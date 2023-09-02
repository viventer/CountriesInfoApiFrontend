import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./globalElements/styles/GlobalStyles";
import { store } from "./app/store";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = {
  colors: {
    darkGray: "#1F2421",
    darkBlue: "#216869",
    lightBlue: "#a0e3f9",
    lightGreen: "#A0F9B6",
    darkGreen: "#407756",
    lightGray: "#DCE1DE",
    peach: "#f9b6a0",
  },
};
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
