import React from "react";
import { useAuth } from "./provider/AuthProvider";
import axios from 'axios'

const Authentication = ({ children }) => {
    const { user, login } = useAuth();
    const navigateToLogin = async () => {
        window.location.href = '/login';
    }
    const fetchCurrentUser = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            if (!user.username) {
                navigateToLogin();
            }
        };
        try {
            const response = await axios.get('http://localhost:9000/current-user', {
                headers: { Authorization: token }
            });
            console.log("response came", response)
            login(response.data.user);
            if (!response.data.user) {
                navigateToLogin();
            }
        } catch (error) {
            console.log('User is not logged in');
            navigateToLogin();
        }
    }

    fetchCurrentUser();
    return children;
}
export default Authentication