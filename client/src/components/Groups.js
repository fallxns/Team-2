import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import {
  Flex,
  Spacer,
  Square,
  Box,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Card,
  CardBody,
  StackDivider,
} from '@chakra-ui/react';

const Groups = ({ onGroupSelect }) => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState('');

  useEffect(() => {
    axios
      .get('http://35.246.6.37:3001/groups')
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => console.error('Error fetching groups:', error));
  }, []);

  const createGroup = () => {
    if (newGroup !== '') {
      axios
        .post('http://34.105.142.231:3001/groups', { name: newGroup })
        .then((response) => {
          setGroups((prevGroups) => [...prevGroups, response.data]);
          setNewGroup('');
        })
        .catch((error) => console.error('Error creating group:', error));
    }
  };

  return (
    <div>
      <Stack spacing={4} direction="row" bg="#f6f8fc" pt="12px">
        <Square flex="1" pl="8px">
          <input
            type="text"
            value={newGroup}
            variant="outline"
            className="newChat"
            onChange={(e) => setNewGroup(e.target.value)}
            placeholder="Type user or groupchat name..."
          />
        </Square>
        <Square w="25%" alignItems="left">
          <Button onClick={createGroup} colorScheme="messenger" size="sm">
            Create Chat
          </Button>
        </Square>
      </Stack>

      <Card boxShadow="xs" borderRadius={'0'}>
        <Stack divider={<StackDivider />} spacing="4">
          {groups.map((group, index) => (
            <CardBody key={index} onClick={() => onGroupSelect(group.name)}>
              <Text>{group.name}</Text>
              {/* Group name on the left hand-side. */}
            </CardBody>
          ))}
        </Stack>
      </Card>
    </div>
  );
};

export default Groups;
