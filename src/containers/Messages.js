import React,{useState} from 'react'
import Message from '../components/Message'



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
        <div>
            <div>
                {msj}
            </div>
            <form >
                <input type="text" value={input} onChange={onChangeHandler} />
                <button type="submit" onClick={onClickHandler}>Send Message</button>
            </form>
        </div>
    )
}

export default Messages
