import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core";
import { LoginProvider } from "./Components/Context/Context";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "./Redux/Store/Store";

const store = getStore;

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <LoginProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </LoginProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
