// client/src/components/AuthProvider.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('');

  const handleLoginSuccess = (response) => {
    const user = response.profileObj; // Assuming you use Google Login and have profileObj
    setIsAuthenticated(true);
    setMessage(`Welcome, ${user.name}!`);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMessage('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, message, handleLoginSuccess, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
