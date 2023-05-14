const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Define a route for retrieving a list of line graph points
app.get('/api/linegraph', (req, res) => {
  
    axios
    .post('http://34.105.142.231/team2/getLineGraph.php', {})
    .then(function (response) {
      // Handle successful graph response
      if (response.data != '') {
        res.send(response.data);
      } else {
        res.status(401).send('Unable to get Graph data');
      }
    })
    .catch(function (error) {
      // Handle PHP page error
      res.status(401).send(error);
    });
    });

// Define a route for retrieving a list of workload line graph points
app.get('/api/workloadgraph', (req, res) => {
  
  axios
  .post('http://34.105.142.231/team2/getWorkloadGraph.php', {})
  .then(function (response) {
    // Handle successful graph response
    if (response.data != '') {
      res.send(response.data);
    } else {
      res.status(401).send('Unable to get Graph data');
    }
  })
  .catch(function (error) {
    // Handle PHP page error
    res.status(401).send(error);
  });
  });

app.get('/api/teamAweekly', (req, res) => {
  
    axios
    .post('http://34.105.142.231/team2/getTeamAWeekly.php', {})
    .then(function (response) {
      // Handle successful graph response
      if (response.data != '') {
        res.send(response.data);
      } else {
        res.status(401).send('Unable to get Graph data');
      }
    })
    .catch(function (error) {
      // Handle PHP page error
      res.status(401).send(error);
    });
    });

app.get('/api/teamAmonthly', (req, res) => {
  
    axios
    .post('http://34.105.142.231/team2/getTeamAMonthly.php', {})
    .then(function (response) {
      // Handle successful graph response
      if (response.data != '') {
        res.send(response.data);
      } else {
        res.status(401).send('Unable to get Graph data');
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
