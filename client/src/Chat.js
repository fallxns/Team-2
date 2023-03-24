import React from 'react'
import { useEffect, useState } from 'react';

function Chat({socket, username, groupchat}){
    const [message, setMessage] = useState("");
    const [messageRecieved, setMessageRecieved] = useState("");
    // Emit event listener
    const sendMessage = async () => {
        if (message !== "") {
            const messageData = {
                group: groupchat,
                user: username,
                message: message,
                time: 
                    new Date(Date.now()).getHours() +
                    "hrs " +
                    new Date(Date.now()).getMinutes(),
            };
            console.log(messageData)
            await socket.emit("send_msg", {messageData});
        }
    };
    
    // Message recieved to user
    useEffect(() =>{
      socket.on("recieved_msg", (data) => {
        // setMessageRecieved
        console.log(data)
        setMessageRecieved(data)
      })
    }, [socket]);

    return(
        <div>
            <input 
                placeholder="Message..." 
                onChange={(event)=>{
                    setMessage(event.target.value);
                }}
            />
            <button onClick={sendMessage}>Send message</button>
            <p>Message: </p>
            {messageRecieved}
        </div>
    );
}

export default Chat;
