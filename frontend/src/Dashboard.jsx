import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user-related data or authentication tokens
    localStorage.removeItem('token');
    // Navigate to the login page
    navigate('/login');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteClick = (user) => {
    axios
      .delete(`/api/user/${user._id}`)
      .then((response) => {
        console.log('user deleted successfully:', response.data);
        setUsers((prevExpenses) =>
          prevExpenses.filter((expense) => expense._id !== user)
        );
        window.location.reload(); // Refresh the page
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const handleBlockClick = (userId) => {
    axios
      .put(`/api/user/${userId}/block`)
      .then((response) => {
        console.log('User blocked successfully:', response.data);
        // Update the expenses state to reflect the updated block status
        setUsers((prevExpenses) =>
          prevExpenses.map((expense) => {
            if (expense._id === userId) {
              return {
                ...expense,
                isBlocked: true,
              };
            }
            return expense;
          })
        );
      })
      .catch((error) => {
        console.error('Error blocking user:', error);
      });
  };

  const handleUnBlockClick = (userId) => {
    axios
      .put(`/api/user/${userId}/unblock`)
      .then((response) => {
        console.log('User unblocked successfully:', response.data);
        // Update the expenses state to reflect the updated block status
        setUsers((prevExpenses) =>
          prevExpenses.map((expense) => {
            if (expense._id === userId) {
              return {
                ...expense,
                isBlocked: false,
              };
            }
            return expense;
          })
        );
      })
      .catch((error) => {
        console.error('Error unblocking user:', error);
      });
  };

  return (
    <div>
      <div className="home-container">
        <div className="video-background">
          <video src="/Videos/p.mp4" autoPlay loop muted></video>
        </div>
        <div className="content">
          <h1 className="heading">Admin Dashboard</h1>
        <img src="/picture/logos.png" alt="Xtrack" width="60" height="60"></img>
          <div className="logout-container">
            <Button variant="contained" color="error" onClick={handleLogout}>
              LOGOUT
            </Button>
          </div>

          <div className="table-container">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: 'white', fontFamily: 'cursive', fontSize: '30px', paddingLeft: '20px' }}>
                      NAME
                    </TableCell>
                    <TableCell style={{ color: 'white', fontFamily: 'cursive', fontSize: '30px', paddingLeft: '20px' }}>
                      ACTIONS
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell style={{ color: 'white' }}>{user._id}</TableCell>
                      <TableCell>
                        <>
                          {user.isBlocked ? (
                            <Button variant="contained"  style={{"backgroundColor": "grey", color: "white"}}
                            onClick={() => handleUnBlockClick(user._id)}>
                              UNBLOCK
                            </Button>
                          ) : (
                            <Button variant="contained" color="primary" onClick={() => handleBlockClick(user._id)}>
                              Block
                            </Button>
                          )}
                          <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(user)}>
                            Delete
                          </Button>
                        </>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
