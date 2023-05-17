require('dotenv').config();

const express = require('express');
const axios = require('axios');
const http = require('http');
const cors = require('cors');
const firebaseAdmin = require('firebase-admin');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: 'http://34.105.142.231/',
    methods: ['GET', 'POST'],
  },
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

const serviceAccount = require('./credentials/team-2-379813-firebase-adminsdk-z1dop-8c405292cf.json');

const fbApp = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

const saveMessageToFirestore = async (messageData) => {
  const db = firebaseAdmin.firestore();
  if (messageData.timestamp instanceof Date) {
    messageData.timestamp = firebaseAdmin.firestore.Timestamp.fromDate(
      messageData.timestamp
    );
  } else {
    console.error('Invalid timestamp:', messageData.timestamp);
  }

  try {
    await db.collection('messages').add(messageData);
    console.log('Message saved to Firestore:', messageData);
  } catch (error) {
    console.error('Error saving message to Firestore:', error);
  }
};
const fetchMessagesFromFirestore = async (group, callback) => {
  const db = firebaseAdmin.firestore();
  try {
    const messagesSnapshot = await db
      .collection('messages')
      .where('group', '==', group)
      .get();
    const messages = [];
    messagesSnapshot.forEach((doc) => {
      let data = doc.data();
      if (data.timestamp instanceof firebaseAdmin.firestore.Timestamp) {
        data.timestamp = data.timestamp.toDate(); // convert to JavaScript Date
      } else {
        console.warn('Invalid timestamp:', data.timestamp);
      }
      messages.push(data);
    });
    callback(null, messages);
  } catch (error) {
    console.error('Error fetching messages from Firestore:', error);
    callback(error);
  }
};

// Define a route for retrieving a list of line graph points
app.get('/api/linegraph', (req, res) => {
  axios
    .post('http://34.105.142.231:3001/Team-2/getDB/getLineGraph.php', {})
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
    .post('http://34.105.142.231:3001/Team-2/getDB/getWorkloadGraph.php', {})
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
// De

// Define a route for retrieving a list of users
app.get('/api/login', (req, res) => {
  axios
    .post('http://34.105.142.231:3001/Team-2/getDB/verifyLogin.php', {})
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

// Define a route for retrieving a list of teamAweekly graph points
app.get('/api/teamAweekly', (req, res) => {
  axios
    .post('http://34.105.142.231:3001/Team-2/getDB/getTeamAWeekly.php', {})
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

// Define a route for retrieving a list of team2monthly graph points
app.get('/api/teamAmonthly', (req, res) => {
  axios
    .post('http://34.105.142.231:3001/Team-2/getDB/getTeamAMonthly.php', {})
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

// defining Group API endpoints
app.get('/messages/:groupchat', async (req, res) => {
  const { groupchat } = req.params;
  fetchMessagesFromFirestore(groupchat, (error, messages) => {
    if (error) {
      res.status(500).json({ error: error.toString() });
    } else {
      res.json(messages);
    }
  });
});

app.get('/groups', async (req, res) => {
  const db = firebaseAdmin.firestore();
  try {
    const groupsSnapshot = await db.collection('groups').get();
    const groups = [];
    groupsSnapshot.forEach((doc) => {
      groups.push(doc.data());
    });
    res.json(groups);
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({ error: error.toString() });
  }
});

app.post('/groups', async (req, res) => {
  const db = firebaseAdmin.firestore();
  console.log(req.data);
  const groupData = req.body;
  try {
    await db.collection('groups').add(groupData);
    console.log('Group created:', groupData);
    res.status(201).json(groupData);
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ error: error.toString() });
  }
});

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('join_group', (data) => {
    socket.join(data.group);
    fetchMessagesFromFirestore(data.group, (error, messages) => {
      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        socket.emit('initial_messages', messages);
        io.to(data.group).emit('user_joined', {
          user: data.user,
          group: data.group,
        }); // Notify other users in the group
      }
    });
  });

  socket.on('send_msg', async (data) => {
    const messageData = data.messageData;
    await saveMessageToFirestore(messageData);
    socket.to(messageData.group).emit('recieved_msg', messageData);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = {
  fbApp,
};
