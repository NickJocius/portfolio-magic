import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import loadgif from '../../assets/images/loading.gif';

// Component to for protected user routes

const UserRoute = ({ children, ...rest }) => {

    const { user } = useSelector((state) => ({ ...state }));

    return user && user.token ? <Route {...rest} render={() => children} /> : (

        <Redirect to={{
            pathname: "/"
        }}
        />
    )

};

export default UserRoute;
