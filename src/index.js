// Used to prevent googlebot from rendering our page as blank, should be imported first
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { BrowserRouter } from "react-router-dom";
import Theme from "./Theme";
import GlobalStyles from "./GlobalStyles";
import Starter from "./Starter";
import * as serviceWorker from "./serviceWorker";
import "./universalComponents/pace";

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={Theme}>
      <link
        href="https://fonts.googleapis.com/css?family=Baloo+Bhaijaan|Roboto:300,400,500"
        rel="stylesheet"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <GlobalStyles />
        <Starter />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
