import React, { forwardRef } from 'react'
import "./Message.css"



const Message = forwardRef (({username,message,enteredName},ref) => {

    return (
        
        <div ref={ref} className="message" style={{backgroundColor: username === enteredName && "#d4c3c3",
        textAlign: username === enteredName && "right"}}>
            {username} : {message}
        </div>
    )
})

export default Message
