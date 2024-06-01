import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully!');
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        <select name="profession" onChange={handleChange} required>
          <option value="">Select Profession</option>
          <option value="Student">Student</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit">Signup</button>
      </form>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Signup;
