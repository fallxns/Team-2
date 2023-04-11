const express = require('express');
const app = express();
const $ = require('jquery');

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Define a route for retrieving a list of users
app.get('/api/login', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
  
    // Use jQuery to send an AJAX request to the login endpoint
    $.ajax({
      url: 'verifyLogin.php',
      method: 'POST',
      data: { email: email, password: password },
      success: function(data) {
        // Handle successful login response
        if(data == "Valid"){
          res.send(data);
        }
        else{
          res.status(401).send('Login failed');
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // Handle php page error
        res.status(401).send('Login failed');
      }
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
