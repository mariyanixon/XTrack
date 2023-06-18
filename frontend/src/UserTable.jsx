import React from 'react';
import './Details.css'; // Import the CSS file
import { Link} from 'react-router-dom';
import { Button } from '@mui/material';
const UserTable = ({ users }) => {
  return (
    <table className="Details">
      <thead>
        <tr>
          <th></th>
          <th>User ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Full Name</th>
          <th>Date of Birth</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.user_id}>
            <td>
            <Button id="bt" variant="contained" color="success" ><Link to='/Dashboard'>Button</Link></Button>
            </td>
            <td>{user.user_id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.full_name}</td>
            <td>{user.date_of_birth}</td>
            <td>{user.created_at}</td>
            <td>{user.updated_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
