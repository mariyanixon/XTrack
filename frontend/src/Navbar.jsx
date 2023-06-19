// Navbar.jsx
import React from 'react';
import { useState } from 'react';
import { AppBar, Button, Toolbar , MenuItem, Select, InputLabel} from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [transactionType, setTransactionType] = useState('');
  const [open, setOpen] = useState(false);

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <AppBar style={{ backgroundColor: 'black' }}>
      <Toolbar>



        <Button variant='text' color='warning' id='bt'> <Link to="/profilepage" style={{ color: 'red' }}>PROFILE</Link></Button>
       
       
      <Select
        open={open}
        onClose={handleClose}
        onOpen={() => {}}
        value={transactionType}
        onChange={handleTransactionTypeChange}
        style={{ marginLeft: '1rem', color: 'red', display: open ? 'block' : 'none' }}
      >
       
      </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
