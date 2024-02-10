import React, { useState } from 'react';
import axios from 'axios';
import './Page.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', formData);
      console.log(response.data);
      // Save token to localStorage or state, redirect to posts page
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle error, show error message
    }
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit} className="login-form">
        <input  className="login-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input  className="login-input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
