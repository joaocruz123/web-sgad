import React from "react";
import { Router , Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import  history  from '../history';

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <Router  history={history}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={() => <h1>SignUp</h1>} />
            <PrivateRoute path="/app" component={() => <h1>App</h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </Router >
);

export default Routes;