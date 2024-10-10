// client/src/components/App.js
import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import LoginPage from './LoginPage';
import TopBar from './TopBar';
import { AuthProvider, useAuth } from './AuthProvider';

const MainApp = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <TopBar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={isAuthenticated ? <h1>Welcome!</h1> : <LoginPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainApp />
      </Router>
    </AuthProvider>
  );
};

export default App;
