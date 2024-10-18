import logo from './logo.svg';
import './App.css';
import Login from "./auth/Login"
import Authentication from './auth/Authentication';
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
      element: <AuthProvider><Authentication><div>Hello world!!</div></Authentication></AuthProvider>,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/profile",
      element: <AuthProvider><Authentication><div>Profile page</div></Authentication></AuthProvider>
    }
  ]);


  useEffect(() => {
    // Fetch the "Hello World!" message from the backend
    fetch('http://localhost:9000/') // Adjust the URL if necessary
      .then(response => response.text()) // Get the response as text
      .then(data => setMessage(data)) // Update the state with the fetched message
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (<RouterProvider router={router} />)
}

export default App;
