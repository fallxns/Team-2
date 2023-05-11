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
    
    /*axios.post('http://35.246.68.10/team2/verifyLogin.php', {
      email: 'madhu@make-it-all.co.uk',
      password: 'Madhu1234'
    })
    .then(function (response) {
      // Handle successful login response
      if (response.data == 'Valid') {
        res.send(response.data);
      } else {
        //res.status(401).send('Login failed');
        res.send(response.data);
      } 
    })
    .catch(function (error) {
      // Handle PHP page error
      res.status(401).send(error);
    });
  });*/

    const data = {
      email: email,
      password: password
    };
  
    axios.post('http://35.246.68.10/team2/verifyLogin.php', data)
      .then(function (response) {
        // Handle successful login response
        if (response.data == 'Valid') {
          res.send(response.data);
        } else {
          res.status(401).send('Login failed');
        } 
      })
      .catch(function (error) {
        // Handle any errors
        res.status(500).send('Internal Server Error');
      });
  });

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
