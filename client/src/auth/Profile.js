import React, {useContext} from 'react';
import { AuthContext } from './provider/AuthProvider';

const Profile = () => {
    const { currentUser } = useContext(AuthContext);
    
    return (
        <>
            <h1>Profile Id - {currentUser.id}</h1>
            <p>Welcome {currentUser.name}</p>
        </>
    );
};
export default Profile;