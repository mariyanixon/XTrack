

import { TableBody } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpenseId, setEditingExpenseId] = useState('');
  const [editFormData, setEditFormData] = useState({
    username: '',
    income: 0,
    expense: 0
  });

  const getTotal = () => {
    let total = 0;
    expenses?.forEach(e => total += e.expense);
    return total;
  };
  const total = getTotal();

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        }
      });
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleEditExpense = (expenseId) => {
    const expenseToEdit = expenses.find((expense) => expense._id === expenseId);
    setEditingExpenseId(expenseId);
    setEditFormData({
      username: expenseToEdit.username,
      income: expenseToEdit.income,
      expense: expenseToEdit.expense
    });
  };

  const handleUpdateExpense = (e) => {
    e.preventDefault();
    axios.put(`/api/expenses/${editingExpenseId}`, editFormData)
      .then(response => {
        console.log('Expense updated successfully:', response.data);
        setEditingExpenseId('');
        setEditFormData({
          username: '',
          income: 0,
          expense: 0
        });
        fetchExpenses(); // Refresh expenses data after update
      })
      .catch(error => {
        console.error('Error updating expense:', error);
      });
  };

  const handleEditFormChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleDeleteClick = (expenseId) => {
    axios.delete(`/api/expenses/${expenseId._id}`)
      .then(response => {
        console.log('Expense deleted successfully:', response.data);
        setExpenses(prevExpenses =>
          prevExpenses.filter(expense => expense._id !== expenseId)
        );
        window.location.reload(); // Refresh the page
      })
      .catch(error => {
        console.error('Error deleting expense:', error);
      });
  };

  const handleSaveClick = () => {
    setEditingExpenseId('');
    setEditFormData({
      username: '',
      income: 0,
      expense: 0
    });
    window.location.reload(); // Refresh the page
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="video-background">
          <video src="/Videos/p.mp4" autoPlay loop muted></video>
        </div>
        <div className="content">
          <h1 className="heading">Welcome To Home Page</h1>
        <img src="/picture/logos.png" alt="Xtrack" width="60" height="60"></img>
          <h2 className="">Total Expenses : {total}</h2>
          <div className="table-container">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>NAME</TableCell>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>INCOME</TableCell>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>EXPENSES</TableCell>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {expenses.map((expense) => (
                    <TableRow key={expense._id}>
                      <TableCell  style={{ color: "white"}}>{expense.username}</TableCell>
                      <TableCell  style={{ color: "white"}}>{expense.income}</TableCell>
                      <TableCell  style={{ color: "white"}}>{expense.expense}</TableCell>
                      <TableCell>
                        {editingExpenseId === expense._id ? (
                          <form onSubmit={handleUpdateExpense}>
                            <input
                              type="text"
                              name="username"
                              value={editFormData.username}
                              onChange={handleEditFormChange}
                            />
                            <input
                              type="number"
                              name="income"
                              value={editFormData.income}
                              onChange={handleEditFormChange}
                            />
                            <input
                              type="number"
                              name="expense"
                              value={editFormData.expense}
                              onChange={handleEditFormChange}
                            />
                            <Button type="submit" variant="contained" color="success">Save</Button>
                            <Button variant="contained" color="secondary" onClick={handleSaveClick}>Cancel</Button>
                          </form>
                        ) : (
                          <>
                            <Button variant="contained" color="error" onClick={() => handleEditExpense(expense._id)}>Edit</Button>
                            <Button variant="contained" color="success" onClick={() => handleDeleteClick(expense)}>Delete</Button>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Button variant="contained" color="success">
            <Link to="/single" style={{ color: 'red' }}>ADD</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;





