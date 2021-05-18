import React,{useState} from 'react'
import Username from '../components/Username'
import Message from "../components/Message"
import "./Messages.css"


function Messages(props) {

    const [input, setInput] = useState("")

    const [messages, setMessages] = useState([{username : "cagatay", message : "Hello bro"},{username : "alper", message : "Hi bro"}])

    const [username, setUsername] = useState("")


    const onChangeHandler = (e) =>{
        setInput(e.target.value)
    }

    const onClickHandler = (e) =>{
        e.preventDefault()
        setMessages([...messages,{username:username, message:input}])
               
        setInput("")
        
    }

    const onNameHandler = (name) =>{
        setUsername(name)
        
    }

    const msj =messages.map(message => 
        <Message username={message.username} message={message.message}/>
    )
    
    return (
        <div className="messages">
            <h1>Welcome {username.length > 0 ? username : "Anonymous"}</h1>
            <div>
                {msj}
            </div>
            <form className="messages__form">
                <input type="text" placeholder="Enter your message" value={input} onChange={onChangeHandler} />
                <button type="submit" disabled={!input} onClick={onClickHandler}>Send Message</button>
            </form>
            <Username username={onNameHandler}/>
        </div>
    )
}

export default Messages
