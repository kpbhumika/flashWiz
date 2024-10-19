// src/context/AuthProvider.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserFetched, setIsUserFetched] = useState(null);
  return (
    <AuthContext.Provider value={{ isUserFetched, currentUser, setCurrentUser, setIsUserFetched }}>
      {children}
    </AuthContext.Provider>
  );
};