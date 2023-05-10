import './App.css';
import * as React from 'react';
import io from 'socket.io-client';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

import MessageDashTab from './components/dashboardComponents/messageDashTab';

function App() {
  const [username, setUsername] = useState('');
  const [group, setGroup] = useState('');
  const [joined, setJoined] = useState(false);

  const socket = io();

  const joinGroup = () => {
    if (username !== '' && group !== '') {
      setJoined(true);
      socket.emit('join_group', group);
    }
  };

  return (
    <ChakraProvider className="mainApp">
      <div>
        <Flex
          paddingTop={'10px'}
          fontSize={'xx-large'}
          fontFamily={'heading'}
          fontWeight={'extrabold'}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          Make-It-All
        </Flex>
        <Flex> {MessageDashTab()} </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
