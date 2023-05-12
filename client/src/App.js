import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Chat from './components/Chat';
import Groups from './components/Groups';

function App() {
  const [username, setUsername] = useState('');
  const [group, setGroup] = useState('');
  const [joined, setJoined] = useState(false);

  const joinGroup = (groupName) => {
    if (username !== '') {
      setGroup(groupName);
      setJoined(true);
    }
  };

  const createGroup = async (groupName) => {
    try {
      await axios.post('http://localhost:3001/groups', { name: groupName });
      alert('Group created successfully');
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  return (
    <div className="App">
      {joined === false ? (
        <div className="join-group">
          <h3>Message app</h3>
          <input
            type="text"
            placeholder="Username:"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Groups onGroupSelect={joinGroup} onGroupCreate={createGroup} />
        </div>
      ) : (
        <div className="chat-container">
          <Chat username={username} groupchat={group} />
          <button
            className="leave-group"
            onClick={() => {
              setJoined(false);
            }}
          >
            Leave Group
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
