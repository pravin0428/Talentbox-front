import React from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
const GoogleLogin = () => {
  // Replace with your backend server URL
  const backendUrl = 'http://localhost:8080'; // Update with your backend URL

  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get(`${backendUrl}/auth/google`);
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <div>
    <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
    </div>
  );
};

export default GoogleLogin;
