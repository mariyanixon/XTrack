import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
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
      .then((response) => response.json())
      .then((data) => {
        console.log('User registered:', data);
        navigate('/Login');
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        // Handle error and show an error message to the user
      });
  
    console.log('Signup submitted:', name, place, age, email, education, contactDetails, phoneNumber,password);

   
    // navigate('/Login');
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
  };

  const handleShowTerms = () => {
    setShowTerms(true);
  };

  return (
    <div className="sign-container">
      <div className="video-background">
        <video src="/Videos/back.mp4.mp4" autoPlay loop muted></video>
      </div>
      
      <div className="sign-content">
        
        <Box>
          <br></br>
          <br></br>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
          <h2>Sign Up</h2>
          <div className="form-field">
            <p>Name</p>
            <TextField  variant="filled"
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
            }} value={name} onChange={(e) => setName(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Place</p>
            <TextField  variant="filled"
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
            }} value={place} onChange={(e) => setPlace(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Age</p>
            <TextField  variant="filled"
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
            }} value={age} onChange={(e) => setAge(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Email id</p>
            <TextField  variant="filled"
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
            }} value={email} onChange={(e) => setEmail(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Education</p>
            <TextField  variant="filled"
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
            }} value={education} onChange={(e) => setEducation(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Contact Details</p>
            <TextField  variant="filled"
            label="contact details"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiFilledInput-input': {
                color: '#FFFFFF',
              },
            }} value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Phone Number</p>
            <TextField  variant="filled"
            label="phno"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiFilledInput-input': {
                color: '#FFFFFF',
              },
            }} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Set Password</p>
            <TextField  variant="filled"
            label="set password"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiFilledInput-input': {
                color: '#FFFFFF',
              },
            }} value={password} onChange={(e) => setPassword(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Confirm Password</p>
            <TextField  variant="filled"
            label="confirm"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiFilledInput-input': {
                color: '#FFFFFF',
              },
            }} value={password} onChange={(e) => setPassword(e.target.value)} className="text-field" />
          </div>
          <div className="form-field" style={{ alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
            <Typography>I agree to the terms and conditions</Typography>
          </div>
          <br />
          <br />
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
        </Box>
      </div>
    </div>
  );
};

export default Sign;
