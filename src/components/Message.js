import React from 'react'
import "./Message.css"
function Message({username,message}) {
    return (
        <div className="message">
            {username} : {message}
        </div>
    )
}

export default Message
