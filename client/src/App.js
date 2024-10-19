import logo from './logo.svg';
import './App.css';
import Login from "./auth/Login"
import Profile from "./auth/Profile"
import Authenticate from './auth/Authentication';
import {AuthProvider} from './auth/provider/AuthProvider';
import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [message, setMessage] = useState('');
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authenticate><div>Hello world!!</div></Authenticate>,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/profile",
      element: <Authenticate><Profile/></Authenticate>
    }
  ]);


  useEffect(() => {
    // Fetch the "Hello World!" message from the backend
    fetch('http://localhost:9000/') // Adjust the URL if necessary
      .then(response => response.text()) // Get the response as text
      .then(data => setMessage(data)) // Update the state with the fetched message
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (<AuthProvider><RouterProvider router={router}/></AuthProvider>)
}

export default App;
