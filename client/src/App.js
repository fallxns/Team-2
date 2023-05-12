import './App.css';
import { useState } from 'react';
import Chat from './components/Chat';

function App() {
  const [username, setUsername] = useState('');
  const [group, setGroup] = useState('');
  const [joined, setJoined] = useState(false);

  const joinGroup = () => {
    if (username !== '' && group !== '') {
      setJoined(true);
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

          <input
            type="text"
            placeholder="Group name"
            onChange={(event) => {
              setGroup(event.target.value);
            }}
          />
          <button onClick={joinGroup}>Join Group</button>
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
