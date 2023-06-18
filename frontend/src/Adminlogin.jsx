import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
              // // Perform login logic here, e.g., sending a request to the server

              // // Assuming the login is successful, navigate to the admin dashboard
              // navigate('/Dashboard ');

    // Check if the entered username and password match the predefined values
    if (username === 'admin' && password === 'admin123') {
      // Assuming the login is successful, navigate to the admin dashboard
      navigate('/Dashboard');
    } else {
      // Handle incorrect credentials here, such as displaying an error message
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-content">
        <div className="video-background">
          <video src="/Videos/p.mp4" autoPlay loop muted></video>
        </div>
        <div className="login-content">
          <h1 className="admin-login-title">Admin Login</h1>
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
              value={username}
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
            <br />
        
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
              <Button id="bt" variant="contained" color="success" onClick={handleLogin}>Login
                
              </Button>
              <Button id="bt" variant="contained" color="warning">
                Reset
              </Button>
            </div>
            <br />
           
            <div style={{ textAlign: 'left' }}>
            
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
