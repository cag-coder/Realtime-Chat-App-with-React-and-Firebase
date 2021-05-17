import React,{useState} from 'react'
import Message from '../components/Message'
import "./Messages.css"


function Messages() {

    const [input, setInput] = useState("")
    const [messages, setMessages] = useState(["ABC","ADC"])

    const onChangeHandler = (e) =>{
        setInput(e.target.value)
    }

    const onClickHandler = (e) =>{
        e.preventDefault()
        setMessages([...messages,input])
        setInput("")
       console.log(input)
        
    }

    const msj =messages.map(message =>
       <Message message={message}/>
    )
    
    return (
        <div className="messages">
            <div>
                {msj}
            </div>
            <form className="messages__form">
                <input type="text" placeholder="Enter your message" value={input} onChange={onChangeHandler} />
                <button type="submit" disabled={!input} onClick={onClickHandler}>Send Message</button>
            </form>
        </div>
    )
}

export default Messages
