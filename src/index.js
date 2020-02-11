// Used to prevent googlebot from rendering our page as blank, should be imported first
import "babel-polyfill";
import React, { Fragment, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Theme from "./Theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import "./shared/pace";

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={Theme}>
      <link
        href="https://fonts.googleapis.com/css?family=Baloo+Bhaijaan|Roboto:300,400,500"
        rel="stylesheet"
      />
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<Fragment />}>
        <Switch>
          <Route path="/c">
            <LoggedInComponent />
          </Route>
          <Route>
            <LoggedOutComponent />
          </Route>
        </Switch>
      </Suspense>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
