import MessageDashTab from './components/dashboardComponents/messageDashTab';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { AddIcon } from '@chakra-ui/icons';
import io from 'socket.io-client';
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  IconButton,
  WrapItem,
  Flex,
  Spacer,
  Input,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from '@chakra-ui/react';

function App() {
  const [username, setUsername] = useState('');
  const [group, setGroup] = useState('');
  const [joined, setJoined] = useState(false);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://34.105.142.231:3001');
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

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
        <Flex>
          {' '}
          <MessageDashTab socket={socket} />{' '}
        </Flex>
      </div>
    </ChakraProvider>
  );
}
export default App;
