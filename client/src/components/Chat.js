import React, { useEffect, useState } from 'react';
import './Chat.css';
import { io } from 'socket.io-client';

const Chat = ({ groupchat, username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create a socket connection to your server
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket && groupchat) {
      // Join the group chat
      socket.emit('join_group', { group: groupchat });

      // Listen for the initial_messages event
      socket.on('initial_messages', (initialMessages) => {
        const fetchedMessages = initialMessages.map((item) => ({
          ...item,
        }));
        setMessages(fetchedMessages);
      });

      // Listen for received messages
      socket.on('recieved_msg', (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      // Cleanup function to remove the listener when the component is unmounted
      return () => {
        socket.off('initial_messages');
        socket.off('recieved_msg');
      };
    }
  }, [socket, groupchat]);

  const sendMessage = async () => {
    if (message !== '') {
      const messageData = {
        group: groupchat,
        user: username,
        message: message,
        timestamp: new Date(),
      };
      try {
        // Send the message to the server using Socket.IO
        socket.emit('send_msg', { messageData });

        setMessages((prevMessages) => [...prevMessages, messageData]);

        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="Chat">
      <div className="chat-header">{groupchat}</div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`chat-message ${
              msg.user === username ? 'chat-receiver' : ''
            }`}
          >
            <span className="chat-name">{msg.user}</span>
            {msg.message}
            <span className="chat-timestamp">
              {msg.timestamp && new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
