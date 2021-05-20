import React from 'react'
import "./Message.css"
function Message({username,message,enteredName}) {

    return (
        <div className="message" style={{backgroundColor: username === enteredName && "blue",
        textAlign: username === enteredName && "right"}}>
            {username} : {message}
        </div>
    )
}

export default Message
