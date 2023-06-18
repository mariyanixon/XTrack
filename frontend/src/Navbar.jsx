// Navbar.jsx
import React from 'react';
import { AppBar, Button, Toolbar} from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
     
       
      {/* <Button variant="contained" style={{float: 'right'}} color="primary" className="float-right" >Update</Button> */}
         <Button  variant='text' color='warning' id='bt'> <Link to="/profilepage" style={{ color: 'red' }}>PROFILE</Link></Button>
         
           </Toolbar>
    </AppBar>
  );
};

export default Navbar;
