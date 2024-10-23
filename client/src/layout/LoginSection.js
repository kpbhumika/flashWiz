import { useContext } from "react";
import { AuthContext } from '../auth/provider/AuthProvider';
import axios from 'axios';

const LoginSection = () => {
    const { currentUser, setCurrentUser, setIsUserFetched } = useContext(AuthContext);
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
        return fetchCurrentUser().then(()=>{
            console.log("User Fetched")
        });
    };

    const logoutUser = async () => {
        try {
            // Make the POST request
            axios.post("/logoutuser")
                .then(response => {
                    // Handle success
                    console.log('Response:', response.data);
                    const { success } = response.data;
                    if (success) {
                        setCurrentUser(null);
                        setIsUserFetched(false);
                    }
                })
                .catch(error => {
                    // Handle error
                    console.error('Error:', error);
                });


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {currentUser ?
                <button onClick={logoutUser}>
                    Log Out
                </button>
                :
                <button onClick={handleLogin}>
                    Log In
                </button>
            }
        </>)
}

export { LoginSection }