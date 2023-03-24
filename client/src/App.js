import './App.css';
import { useState } from 'react';
import io from "socket.io-client"
import Chat from './Chat.js';
const socket = io.connect("http://localhost:3001")


function App() {
  const [username, setUsername] = useState("");
  const [group, setGroup] = useState("");

  const joinGroup = () =>{
    if (username !== "" && group !== ""){
      socket.emit("join_group", group)
    }
  }

  return (
    <div className="App">
    <h3>Message app</h3>
    <input
      type = "text" 
      placeholder="Username:" 
      onChange={(event)=>{
        setUsername(event.target.value);
      }}
    />

    <input
      type = "text" 
      placeholder="Group name" 
      onChange={(event)=>{
        setGroup(event.target.value);
      }}
    />
    <button onClick={joinGroup}> Join Group </button>

     <Chat socket={socket} username={username} groupchat={group}/>
    </div>
  );
}

export default App;
