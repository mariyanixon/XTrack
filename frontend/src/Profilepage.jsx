// import React , {useState} from 'react'
// import { TextField, Button, Typography, AppBar, Box, Toolbar } from '@mui/material';
// import { Link } from 'react-router-dom';
// import './Single.css';

// const Profilepage = () => {
//     const [income, setIncome] = useState(0);
//     const [expense, setExpense] = useState(0);

//   return (
//     <div>
//         <Box sx={{ flexGrow: 2 }}>
//             <AppBar position="static" style={{background:"Black"}}>
//                 <Toolbar>
//                     <Typography variant="h4" component="div" sx={{ flexShrink: 2 }}>Settings</Typography>
//                     <Button variant="contained" color="secondary"><Link to = {'/Home'} style = {{textDecoration:"none",color:"white"}}>HOME</Link></Button>
//                     <Button variant="contained" color="primary" ><Link to = {'/'} style = {{textDecoration:"none",color:"white"}}>LOGOUT</Link></Button>
                    
//                 </Toolbar>

//             </AppBar>
      
//         </Box>



//         <Typography variant="h4" color={"black"}><b>Profile</b></Typography>
  
        
//         <ul>
//         <li><TextField label="Name:" /></li><br/>
//         <li><TextField label="Place:" /></li><br/>
//         <li><TextField label="Age:" /></li><br/>
//         <li><TextField label="Education:" /></li><br/>
//         <li><TextField label="Email-ID:" /></li><br/>
//         <li><TextField label="Ph_No:" /></li><br/>
//         </ul>

//         {/* Submit button */}
//         <Button variant="contained" color="primary">Update Profile</Button>


//     </div>
//   )
// }

// export default Profilepage

                // import React, { useState, useEffect } from 'react';
                // import { TextField, Button, Typography, AppBar, Box, Toolbar } from '@mui/material';
                // import { Link } from 'react-router-dom';
                // import './Single.css';

                // const Profilepage = () => {
                // const [user, setUser] = useState({
                //     name: '',
                //     place: '',
                //     age: '',
                //     education: '',
                //     email: '',
                //     phoneNumber: ''
                // });
                // const [userid,setUserId]=useState('');

                // useEffect(() => {
                //     // Fetch user details from the backend
                //     fetchUserDetails();
                // }, []);

                // const fetchUserDetails = async () => {
                //     try {
                //     const response = await fetch('/api/user', {
                //         headers: {
                //         Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you store the token in localStorage
                //         }
                //     });

                //     if (!response.ok) {
                //         throw new Error('Failed to fetch user details');
                //     }

                //     const data = await response.json();
                //     setUserId(data.username)
                //     } catch (error) {
                //     console.error(error);
                //     }
                // };

                // return (
                //     <div>
                //     <Box sx={{ flexGrow: 2 }}>
                //         <AppBar position="static" style={{ background: "Black" }}>
                //         <Toolbar>
                //             <Typography variant="h4" component="div" sx={{ flexShrink: 2 }}>Settings</Typography>
                //             <Button variant="contained" color="secondary"><Link to={'/Home'} style={{ textDecoration: "none", color: "white" }}>HOME</Link></Button>
                //             <Button variant="contained" color="primary" ><Link to={'/'} style={{ textDecoration: "none", color: "white" }}>LOGOUT</Link></Button>
                //         </Toolbar>
                //         </AppBar>
                //     </Box>

                //     <Typography variant="h4" color={"black"}><b>Profile</b></Typography>

                //     <ul>
                //         <li><TextField label="Name:" value={userid} readOnly /></li><br />
                //         <li><TextField label="Place:" value={user.place} /></li><br />
                //         <li><TextField label="Age:" value={user.age} /></li><br />
                //         <li><TextField label="Education:" value={user.education} /></li><br />
                //         <li><TextField label="Email-ID:" value={user.email} /></li><br />
                //         <li><TextField label="Ph_No:" value={user.phoneNumber} /></li><br />
                //     </ul>

                //     {/* Submit button */}
                //     <Button variant="contained" color="primary">Update Profile</Button>
                //     </div>
                // );
                // };

                // export default Profilepage;

                import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, AppBar, Box, Toolbar } from '@mui/material';
import { Link ,useNavigate } from 'react-router-dom';

import './Single.css';

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
       navigate("/Home");
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
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static" style={{ background: 'black' }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexShrink: 2 }}>Settings</Typography>
            <Button variant="contained" color="secondary"><Link to={'/Home'} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link></Button>
            <Button variant="contained" color="primary" ><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>LOGOUT</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Typography variant="h4" color="black"><b>Profile</b></Typography>

      <ul>
        <li><TextField label="Name:" name="name" value={user.name} readOnly /></li><br />
        <li><TextField label="Place:" name="place" value={user.place} onChange={handleTextFieldChange} /></li><br />
        <li><TextField label="Age:" name="age" value={user.age} onChange={handleTextFieldChange} /></li><br />
        <li><TextField label="Education:" name="education" value={user.education} onChange={handleTextFieldChange} /></li><br />
        <li><TextField label="Email-ID:" name="email" value={user.email} onChange={handleTextFieldChange} /></li><br />
        <li><TextField label="Ph_No:" name="phoneNumber" value={user.phoneNumber} onChange={handleTextFieldChange} /></li><br />
      </ul>

      {/* Submit button */}
      <Button variant="contained" color="primary" onClick={updateUserProfile}>Update Profile</Button>
    </div>
  );
};

export default Profilepage;

