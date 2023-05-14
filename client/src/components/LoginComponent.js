import React, { useState } from 'react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmails = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const employeeData = await response.json();
        let found = false;

        for (let employee in employeeData) {
          if (
            employeeData[employee].email === email &&
            employeeData[employee].password === password
          ) {
            found = true;
            break;
          }
        }

        console.log(found);

        if (found) {
          alert('Successfully logged in');
          // Do anything after successful login
        } else {
          alert('Invalid Details');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={validateEmails}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginComponent;
