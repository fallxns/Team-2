import React, { useEffect, useRef, useState } from 'react';

function Chat({ socket, username, groupchat }) {
  const [message, setMessage] = useState('');
  const [messageRecieved, setMessageRecieved] = useState('');
  const messageInputRef = useRef(null); // add a ref to the input element
  // Emit event listener
  const sendMessage = async () => {
    if (message !== '') {
      const messageData = {
        group: groupchat,
        user: username,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          'hrs ' +
          new Date(Date.now()).getMinutes(),
      };
      console.log(messageData);
      await socket.emit('send_msg', { messageData });
      setMessage('');
    } else {
      messageInputRef.current.focus(); // set focus back to input if message is empty
    }
  };

  // Message recieved to user
  useEffect(() => {
    socket.on('recieved_msg', (data) => {
      console.log(data);
      setMessageRecieved(data);
    });
  }, [socket]);

  return (
    <div>
      <h3>Group: {groupchat}</h3>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        value={message}
        ref={messageInputRef} // attach the ref to the input element
      />
      <button onClick={sendMessage}>Send message</button>
      <p>Message: </p>
      {messageRecieved}
    </div>
  );
}

export default Chat;

/*
useEffect(() => {
    socket.on('recieved_msg', (data) => {
      setMessagesRecieved((messages) => [...messages, data]);
    });
  }, [socket]);

{messagesRecieved.map((msg) => (
        <p key={msg.time}>
          {msg.user}: {msg.message}
        </p>
      ))}
*/
