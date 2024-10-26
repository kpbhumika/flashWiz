// src/components/Authenticate.js
import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Authenticate = ({ children }) => {
  const { isUserFetched, currentUser } = useContext(AuthContext);

  if (isUserFetched) {
    if(!currentUser){
      return <Navigate to="/login" />;}
    else{
      return children
    }
  }
  return <>loading ...</>
};

export default Authenticate;