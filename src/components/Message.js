import React, { forwardRef } from 'react'
import "./Message.css"



const Message = forwardRef (({username,message,enteredName},ref) => {

    return (
        
        <div ref={ref} className={`message ${username === enteredName && "message__user"} `}>
            {username || "Anonymous"}: {message}
        </div>
    )
})

export default Message
