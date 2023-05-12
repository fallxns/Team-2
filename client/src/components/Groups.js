import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Groups = ({ onGroupSelect }) => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/groups')
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => console.error('Error fetching groups:', error));
  }, []);

  const createGroup = () => {
    if (newGroup !== '') {
      axios
        .post('http://localhost:3001/groups', { name: newGroup })
        .then((response) => {
          setGroups((prevGroups) => [...prevGroups, response.data]);
          setNewGroup('');
        })
        .catch((error) => console.error('Error creating group:', error));
    }
  };

  return (
    <div>
      <h2>Groups</h2>
      <input
        type="text"
        value={newGroup}
        onChange={(e) => setNewGroup(e.target.value)}
        placeholder="New group name"
      />
      <button onClick={createGroup}>Create Group</button>
      <ul>
        {groups.map((group, index) => (
          <li key={index} onClick={() => onGroupSelect(group.name)}>
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Groups;
