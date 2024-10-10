// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}> {/* Replace with your actual client ID */}
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// Optional: You can still use reportWebVitals as needed
reportWebVitals();
