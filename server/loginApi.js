const express = require('express');
const app = express();
const axios = require('axios');

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Define a route for retrieving a list of users
app.get('/api/login', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
  
    axios
  .post('http://localhost/verifyLogin.php', {
    email: email,
    password: password,
  })
  .then(function (response) {
    // Handle successful login response
    if (response.data == 'Valid') {
      res.send(response.data);
    } else {
      res.status(401).send('Login failed');
    }
  })
  .catch(function (error) {
    // Handle PHP page error
    res.status(401).send(error);
  });
  });

// Define a route for creating a new user
app.post('/users', (req, res) => {
  // Handle the POST request to create a new user
});

// Define a route for updating an existing user
app.put('/users/:id', (req, res) => {
  // Handle the PUT request to update an existing user
});

// Define a route for deleting an existing user
app.delete('/users/:id', (req, res) => {
  // Handle the DELETE request to delete an existing user
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
