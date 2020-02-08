import React, { Fragment, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

function Starter() {
  return (
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
  );
}

export default Starter;
