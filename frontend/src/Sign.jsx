import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import './Sign.css';

const Sign = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
        if (showTerms) {
          const timeout = setTimeout(() => {
            setShowTerms(false);
          }, 5000);
    
          return () => clearTimeout(timeout);
        }
      }, [showTerms]);
  const handleSubmit = () => {
    const userData = {
      name,
      place,
      age,
      email,
      education,
      contactDetails,
      phoneNumber,
      password,
    };

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('User already exists');
        }
      })
      .then((data) => {
        console.log('User registered:', data);
        navigate('/Login');
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setAlertMessage('User already exists');
      });
  };

  const handleReset = () => {
    setName('');
    setPlace('');
    setAge('');
    setEmail('');
    setEducation('');
    setContactDetails('');
    setPhoneNumber('');
    setAgreeTerms(false);
    setPassword('');
    setAlertMessage('');
  };

  const handleShowTerms = () => {
    setShowTerms(true);
    setAlertMessage('');
  };

  return (
    <div className="sign-container">
      <div className="video-background">
        <video src="/Videos/p.mp4" autoPlay loop muted></video>
      </div>

      <div className="sign-content">
        <Box>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Sign Up</h2>
          <div className="form-field">
            <p>Name</p>
            <TextField
              variant="filled"
              label="name"
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
              onChange={(e) => setName(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Place</p>
            <TextField
              variant="filled"
              label="place"
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
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Age</p>
            <TextField
              variant="filled"
              label="age"
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
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Email</p>
            <TextField
              variant="filled"
              label="email"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Education</p>
            <TextField
              variant="filled"
              label="education"
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
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Contact Details</p>
            <TextField
              variant="filled"
              label="contactDetails"
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
              value={contactDetails}
              onChange={(e) => setContactDetails(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Phone Number</p>
            <TextField
              variant="filled"
              label="phoneNumber"
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Password</p>
            <TextField
              variant="filled"
              label="password"
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
              className="text-field"
            />
          </div>
          <div className="form-field">
            <input
              type="checkbox"
              id="agree-terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="agree-terms">I agree to the terms and conditions</label>
          </div>
          <div className="button-group">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              SignUp
            </Button>
            <Button variant="contained" color="warning" onClick={handleReset}>
              Reset
            </Button>
            <td>
              <Button variant="contained" color="secondary" onClick={handleShowTerms}>
                Terms and Conditions
              </Button>
            </td>
          </div>
          {showTerms && (
            <Typography sx={{ position: 'absolute', top: 0, right: 0, margin: '20px', color: 'red' }}>
              If book is not returned or damaged, a fine will be charged.
            </Typography>
          )}
          {alertMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {alertMessage}
            </Alert>
          )}
        </Box>
      </div>
    </div>
  );
};

export default Sign;

