// src/components/Authenticate.js
import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Authenticate = ({children}) => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  if (!currentUser) {
    return <Navigate to="/login" />;
  }  
  return children
};

export default Authenticate;