import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Componet, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Componet {...props} />;
                } else {
                    return <Redirect to='/login' />
                }
            }}
        />
    )
}

export default PrivateRoute;