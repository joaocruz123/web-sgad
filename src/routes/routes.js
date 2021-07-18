import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "./../pages/Home";
import history from '../history';
import { isAuthenticated } from "../services/auth";
import { Provider } from "react-redux";
import { store } from "../redux/store";

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
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={() => <h1>SignUp</h1>} />
                <PrivateRoute path="/app" component={Home} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </Router >
    </Provider>
);

export default Routes;