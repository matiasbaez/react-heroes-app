import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { PropTypes } from 'prop-types';

export const PrivateRoute = ({
    isLogged,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname)
    localStorage.setItem('search', rest.location.search)

    return (
        <Route
            { ...rest }
            component={ (props) => (
                (isLogged)
                ? <Component {...props} />
                : <Redirect to="/login" />
            ) } />
    )
}

PrivateRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
