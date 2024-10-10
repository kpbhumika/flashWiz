// client/src/components/LoginPage.js
import React from "react";

const LoginPage = () => {

  const handleLogin = () => {
    // Redirect to backend to start Google OAuth flow
    window.location.href = "http://localhost:9000/auth/google";
  };

  return (
    <div>
      <h2>Login to Flash Wiz</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
