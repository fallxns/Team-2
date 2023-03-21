const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Importing routes
import indexRouter from './routes/indexRouter.js';
import userRouter from './routes/userRouter.js';
import chatRoomRouter from './routes/chatRouter.js';
import deleteRouter from './routes/deleteRouter.js';

//PORT
const PORT = process.env.PORT || 3000;
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

app.use(cors());

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
