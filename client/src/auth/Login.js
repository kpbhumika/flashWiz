import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const redirectToGoogleFederatedLogin = () => {
    window.location.href = "/login/federated/google";
  };
  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get("/current-user");
      if (response.data) {
        setCurrentUser(response.data);
      }
    } catch (error) {
      setCurrentUser(null);
      redirectToGoogleFederatedLogin();
    }
  };
  const handleLogin = () => {
    return fetchCurrentUser().then(() => {
      if (!currentUser) {
        console.log("User not logged in redirecting");
        redirectToGoogleFederatedLogin();
      }
    });
  };

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  if (currentUser) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      logging in.....
    </>
  );
};
export default Login;
