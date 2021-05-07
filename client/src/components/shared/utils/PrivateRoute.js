import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './common';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            exact
            {...rest}
            render={(props) => getToken() ? <Component {...props} /> : <Redirect exact to={{ pathname: '/', state: { from: props.location } }} />}
        />
    )
}

export default PrivateRoute;
