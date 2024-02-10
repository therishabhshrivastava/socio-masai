import React, { useState } from 'react';
import axios from 'axios';
import './Page.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/register', formData);
      console.log(response.data);
      // Redirect to login page or show success message
    } catch (error) {
      console.error('Signup error:', error.response.data);
      // Handle error, show error message
    }
  };

  return (
    <div className="signup-container">
     
      <form onSubmit={handleSubmit} className="signup-form">
        <input className="signup-input" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input className="signup-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input className="signup-input" type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
        <input className="signup-input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button className="signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
