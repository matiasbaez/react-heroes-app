import React from 'react'

export const LoginScreen = (props) => {

    const { history } = props;

    const handleLogin = () => {
        history.push('/');
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
