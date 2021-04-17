import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';

import { types } from '../../types/types';

export const LoginScreen = (props) => {

    const { dispatch } = useContext(AuthContext)

    const { history } = props;

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        const search = localStorage.getItem('search');

        dispatch({
            type: types.login,
            payload: {
                name: 'Matías Báez'
            }
        });

        history.replace(`${lastPath}${search}`);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}>
                    Ingresar
            </button> 
        </div>
    )
}
