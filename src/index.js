import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalElements/styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = {
  // palette: https://coolors.co/palette/1f2421-216869-49a078-9cc5a1-dce1de
  colors: {
    darkGray: "#1F2421",
    darkBlue: "#216869",
    lightBlue: "#a0e3f9",
    lightGreen: "#9CC5A1",
    darkGreen: "#407756",
    lightGray: "#DCE1DE",
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
