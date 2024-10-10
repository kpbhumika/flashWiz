// client/src/components/TopBar.js
import React from 'react';
import { useAuth } from './AuthProvider';

const TopBar = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <div className="top-bar-container">
      {isAuthenticated && (
        <button onClick={handleLogout}>Logout</button>
      )}
      <h2>{isAuthenticated ? 'Welcome back!' : 'Please log in'}</h2>
    </div>
  );
};

export default TopBar;
