const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Detecting user connections
io.on('connection', (socket) => {
  console.log(`User: ${socket.id} is connected.`);

  socket.on('join_group', (data) => {
    socket.join(data);
    console.log(`User ${socket.id} joined group ${data}`);
  });

  socket.on('send_msg', (data) => {
    socket
      .to(data.messageData.group)
      .emit('recieved_msg', data.messageData.message);
    console.log(data);
  });

  // User disconnects
  socket.on('disconnect', () => {
    console.log(`User ${socket.id} has disconnected.`);
  });
});

io;

// // Importing routes
// import indexRouter from './routes/indexRouter.js';
// import userRouter from './routes/userRouter.js';
// import chatRoomRouter from './routes/chatRouter.js';
// import deleteRouter from './routes/deleteRouter.js';

//PORT
const PORT = process.env.PORT || 3001;
app.set('port', PORT);
/*=
express methods include:
app.get()
app.post()
app.put()
app.delete()
*/

app.get('/users', (req, res) => {
  // code to retrieve users from the database
  console.log(res.json(users));
});

app.post('/users', (req, res) => {
  // code to create a new user in the database
  console.log(res.json(newUser));
});

app.get('/', (req, res) => {
  res.send('API DATA');
});

// 404 Catch
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: "404 ERROR, Endpoint doesn't exist.",
  });
});

// Create http server
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
