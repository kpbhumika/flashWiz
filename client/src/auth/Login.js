import React, { useContext } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Login = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const redirectToGoogleFederatedLogin = () => {
        window.location.href = 'http://localhost:9000/login/federated/google';
    }
    const fetchCurrentUser = async () => {
        try {
            const response = await axios.get('/current-user');
            if (response.data) {
                setCurrentUser(response.data);
            }
            else {
                redirectToGoogleFederatedLogin();
            }
        } catch (error) {
            setCurrentUser(null);
            redirectToGoogleFederatedLogin();
        }
    };
    const handleLogin = () => {
        return fetchCurrentUser();
    };
    if (currentUser) {
        return (<Navigate to="/profile" />)
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>
                login with google
            </button>
        </>
    );
};
export default Login;