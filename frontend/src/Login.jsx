import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import './Login.css';

const Login = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 
  const handleLogin = async () => {
    try {
      // Perform login logic here, e.g., sending a request to the server
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const { token, isBlocked } = data; // Assuming the server response includes a 'token' field

        if (isBlocked) {

          alert("The user is blocked")
          return;
        }
        // Set the token in local storage
        localStorage.setItem('token', token);
        // Assuming the login is successful, navigate to the home page
        navigate('/home');
      } else {
        const data = await response.json();
        // Handle login error, such as displaying an error message
        console.log('Login failed');
        alert(data.message)
      }
    } catch (error) {
      

      // Handle any network or server errors
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="video-background">
        <video src="/Videos/p.mp4" autoPlay loop muted></video>
      </div>

      <div className="login-content">
        <h1 className="login-title">Welcome to XTrack</h1>
        <img src="/picture/logos.png" alt="Xtrack" width="60" height="60"></img>
        <Box
          border={1}
          borderColor="secondary.main"
          borderRadius={10}
          padding={8}
          sx={{
            backgroundColor: 'transparent',
            color: '#333333',
            maxWidth: '400px',
            margin: '0 auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderStyle: 'none',
          }}
        >
          <h2 style={{ color: '#FFFFFF' }}>Login</h2>
          <TextField
            variant="filled"
            label="Username"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiFilledInput-input': {
                color: '#FFFFFF',
              },
            }}
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <TextField
            variant="filled"
            type="password"
            label="Password"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiFilledInput-input': {
                color: '#FFFFFF',
              },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
            <Button id="bt" variant="contained" color="success" onClick={handleLogin}>
              Login
            </Button>
            
          </div>
          <br />
          
          <div style={{ textAlign: 'left' }}>
            <Typography sx={{ color: '#FFFFFF' }}>
              Don't have an account?
              <Link to="/sign" style={{ color: 'red' }}>
                Sign Up
              </Link>
            </Typography>
            <Typography sx={{ color: '#FFFFFF' }}>
              Are you an admin?
              <Link to="/adminlogin" style={{ color: 'red' }}>
                Login
              </Link>
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
