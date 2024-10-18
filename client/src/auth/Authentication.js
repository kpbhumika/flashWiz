
import { useAuth } from "./provider/AuthProvider";
import axios from 'axios'

const Authentication = ({ children }) => {
    const { user, login } = useAuth();
    const navigateToLogin = async () => {
        window.location.href = '/login';
    }
    const fetchCurrentUser = async () => {
        try {
            const response = await axios.get("http://localhost:9000/current-user",
                {
                    withCredentials: true, // Include cookies in the request
                }
            );
            console.log("response came", response)
            const {id, name} = response.data
            login(id);
            if (!id) {
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