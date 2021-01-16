import React from "react";

import List from "./pages/List";
import Login from "./pages/login";
import Register from "./pages/Register";

import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Login />
          </Route>

          <PrivateRoute path="/listagem" component={() => <List />} />
          <PrivateRoute path="/register" component={() => <Register />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
