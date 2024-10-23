// src/components/Authenticate.js
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Authenticate = ({ children }) => {
  const { isUserFetched, currentUser, setCurrentUser, setIsUserFetched } = useContext(AuthContext);

  const fetchCurrentUser = async () => {
    const response = await axios.get('/current-user');
    if (response.data) {
      setCurrentUser(response.data);
    }
    setIsUserFetched(true);
  }

  useEffect(() => {
    if (!isUserFetched) {
      fetchCurrentUser();
    }
  }, []);

  if (isUserFetched && !currentUser) {
    return <Navigate to="/login" />;
  }
  return children
};

export default Authenticate;