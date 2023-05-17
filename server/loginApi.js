const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Define a route for retrieving a list of users
app.get('/api/login', (req, res) => {
  
    axios
    .post('http://34.105.142.231/team2/verifyLogin.php', {})
    .then(function (response) {
      // Handle successful response
      if (response.data != '') {
        res.send(response.data);
      } else {
        res.status(401).send('Unable to get login data');
      }
    })
    .catch(function (error) {
      // Handle PHP page error
      res.status(401).send(error);
    });
  });

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});