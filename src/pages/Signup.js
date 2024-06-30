import React, { useState } from 'react';
import signupImg from "../assets/signup.png";
import Template from '../components/Template';
import axios from 'axios';

const Signup = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      if (response.status === 201) {
        // Set the login state or redirect as needed
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <Template
      title="A World of Knowledge Awaits."
      desc1="Secure Your Museum Pass!"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </Template>
  );
};

export default Signup;
