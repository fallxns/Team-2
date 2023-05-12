import React, { useEffect, useState } from 'react';
import './Chat.css';

function Chat({ username, groupchat }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const response = await fetch(`http://localhost:3001/messages/${groupchat}`);
    const data = await response.json();
    setMessages(data);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('http://localhost:3001/messages');
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (message !== '') {
      const messageData = {
        group: groupchat,
        user: username,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };
      await fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });
      setMessage('');
      fetchMessages();
    }
  };

  return (
    <div className="chat">
      <h1>{groupchat}</h1>
      <div className="messages">
        {messages.map((messageContent, index) => {
          return (
            <div
              key={index}
              className={`message ${
                username === messageContent.user ? 'you' : 'other'
              }`}
            >
              <div className="message-content">
                <p>{messageContent.message}</p>
              </div>
              <div className="message-info">
                <p className="time">{messageContent.time}</p>
                <p className="author">{messageContent.user}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="message-input">
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage();
          }}
          value={message}
        />
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
}

export default Chat;
