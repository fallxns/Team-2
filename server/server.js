//ho
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const firebaseAdmin = require('firebase-admin');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const serviceAccount = require('/Users/angus/TP CODE/TEAM02/Team-2/server/credentials/team-2-379813-firebase-adminsdk-z1dop-8c405292cf.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  apiKey: 'AIzaSyDcz7BvGa5NHpeZvJ43YRMmlZRzWMj17v0',
  authDomain: 'team-2-379813.firebaseapp.com',
  projectId: 'team-2-379813',
  storageBucket: 'team-2-379813.appspot.com',
  messagingSenderId: '541861266484',
  appId: '1:541861266484:web:c2a4bb6206c8a2e56bf661',
});

const saveMessageToFirestore = async (messageData) => {
  const db = firebaseAdmin.firestore();
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
      messages.push(doc.data());
    });
    callback(null, messages);
  } catch (error) {
    console.error('Error fetching messages from Firestore:', error);
    callback(error);
  }
};

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('join_group', (data) => {
    socket.join(data.group);
    fetchMessagesFromFirestore(data.group, (error, messages) => {
      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        socket.emit('initial_messages', messages);
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
