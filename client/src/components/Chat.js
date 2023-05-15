import React, { useEffect, useState } from 'react';
import './Chat.css';
import {
  Button,
  ButtonGroup,
  fontSize,
  textSize,
  Text,
  Flex,
  Box,
  Spacer,
  Center,
  Avatar,
  Stack,
} from '@chakra-ui/react';
import { io } from 'socket.io-client';

const Chat = ({ groupchat, username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create a socket connection to your server
    const newSocket = io('http://34.105.142.231:3001');
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
      <Stack direction="row">
        <Avatar />
        <Text className="chat-header" fontSize="3xl" color="#ffff" p="4px">
          <Center>{groupchat}</Center>
        </Text>
      </Stack>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.user === username ? 'chat-receiver' : ''
            }`}
          >
            <Text fontSize="xl" bg="#ffff" p="6px">
              {msg.message}
            </Text>
            <Flex>
              <Box p="1" bg="">
                <Text className="chat-timestamp" fontWeight={'normal'}>
                  {msg.timestamp &&
                    new Date(msg.timestamp).toLocaleTimeString()}
                </Text>
              </Box>
              <Spacer />
              <Box p="1" bg="">
                <Text className="chat-name" fontWeight={'normal'}>
                  User: {msg.user}
                </Text>
              </Box>
            </Flex>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <Button
          colorScheme="messenger"
          onClick={sendMessage}
          alignContent={'right'}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
