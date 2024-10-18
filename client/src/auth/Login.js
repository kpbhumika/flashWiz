import React from "react";

const Login = () => {
const handleLogin = () => {
        window.location.href = 'http://localhost:9000/login/federated/google';
    };
    return (
        <>
            <h1>Login Page</h1>
            <button type="submit" onClick={handleLogin}>
            login with google
            </button>
        </>
    );
};
export default Login;