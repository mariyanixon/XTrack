import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, AppBar, Box, Toolbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import './Single.css';
import './Profilepage.css';

const Profilepage = () => {
  const [user, setUser] = useState({
    name: '',
    place: '',
    age: '',
    education: '',
    email: '',
    phoneNumber: ''
  });
  const [userid, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from the backend
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const userResponse = await fetch('/api/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user details');
      }

      const userData = await userResponse.json();
      setUserId(userData.username);

      const userDetailsResponse = await fetch(`/api/user/${userData.username}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!userDetailsResponse.ok) {
        throw new Error('Failed to fetch user details');
      }

      const userDetailsData = await userDetailsResponse.json();
      setUser(userDetailsData);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserProfile = async () => {
    try {
      const response = await fetch(`/api/user/${userid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }
      // Assuming the update was successful, you can handle the success scenario here
      console.log('User profile updated successfully');
      navigate('/Home');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextFieldChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <div className="video-background">
        <video src="/Videos/p.mp4" autoPlay loop muted></video>
      </div>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexShrink: 2 }}>
              Settings
            </Typography>
            <Button variant="contained" color="secondary">
              <Link to={'/Home'} style={{ textDecoration: 'none', color: 'white' }}>
                HOME
              </Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                LOGOUT
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Typography variant="h4" color="white">
        <b>Profile</b>
      </Typography>

      <ul>
        <li>
          <TextField
           sx={{
            width: '100%',
            '& .MuiInputLabel-root': {
              color: '#FFFFFF',
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
          }}
          label="Name:"
          name="name"
          value={user.name}
          readOnly
        />
        </li>
        <br />
        <li>
          <TextField
            sx={{
              width: '100%',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiInputBase-input': {
                color: 'white',
              },
            }}
            label="Place:"
            name="place"
            value={user.place}
            onChange={handleTextFieldChange}
          />
        </li>
        <br />
        <li>
          <TextField
            sx={{
              width: '100%',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiInputBase-input': {
                color: 'white',
              },
            }}
            label="Age:"
            name="age"
            value={user.age}
            onChange={handleTextFieldChange}
          />
        </li>
        <br />
        <li>
          <TextField
            sx={{
              width: '100%',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiInputBase-input': {
                color: 'white',
              },
            }}
            label="Education:"
            name="education"
            value={user.education}
            onChange={handleTextFieldChange}
          />
        </li>
        <br />
        <li>
          <TextField
            sx={{
              width: '100%',  
               '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiInputBase-input': {
                color: 'white',
              },
            }}
            label="Email-ID:"
            name="email"
            value={user.email}
            onChange={handleTextFieldChange}
          />
        </li>
        <br />
        <li>
          <TextField
            sx={{
              width: '100%',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiInputBase-input': {
                color: 'white',
              },
            }}
            label="Ph_No:"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleTextFieldChange}
          />
        </li>
        <br />
      </ul>

      <Button variant="contained" color="primary" onClick={updateUserProfile}>
        Update Profile
      </Button>
    </div>
  );
};

export default Profilepage;
