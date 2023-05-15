import React, { useState } from 'react';
import './Chat.css';
import { io } from 'socket.io-client';
import Groups from './Groups';
import Chat from './Chat';
import { Grid, GridItem, Text } from '@chakra-ui/react';

const MessagingDashboard = ({ socket }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [username, setUsername] = useState('User1'); // for simplicity, let's set username to 'User1'

  const handleGroupSelect = (groupName) => {
    setSelectedGroup(groupName);
  };

  return (
    <div>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'screen'}
        gridTemplateColumns={'40% 60%'}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="#ffffff" area={'nav'}>
          <Groups onGroupSelect={handleGroupSelect} />
        </GridItem>
        <GridItem
          pl="2"
          bg="#f6f8fc"
          area={'main'}
          borderLeft="2px"
          borderColor="#e6e9ed"
        >
          {selectedGroup ? (
            <Chat
              socket={socket}
              groupchat={selectedGroup}
              username={username}
            />
          ) : (
            <h1>
              <center>
                <Text fontSize="3xl"> No chat selected.</Text>
                <Text fontWeight="normal">
                  Please select which person or groupchat you would like to
                  message.
                </Text>
              </center>
            </h1>
          )}
        </GridItem>
      </Grid>
    </div>
  );
};

export default MessagingDashboard;
