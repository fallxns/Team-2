
import { useEffect, useState } from 'react';
import './App.css';
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001")


function App() {
  const [message, setMessage] = useState("");
  const [messageRecieved, setMessageRecieved] = useState("");
  // Emit event listener
  const sendMessage = () =>{
    socket.emit("send_msg", {message})
  };
  
  // Message recieved to user
  useEffect(() =>{
    socket.on("recieved_msg", (data) => {
      // setMessageRecieved
      setMessageRecieved(data.message)
    })
  }, [socket]);

  return (
    <div className="App">
     <input placeholder="Message..." onChange={(event)=>{
      setMessage(event.target.value);
     }}/>
     <button onClick={sendMessage}>Send message</button>
     <p>Message: </p>

     {messageRecieved}
    </div>
  );
}

export default App;
