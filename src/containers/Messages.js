import React,{useState} from 'react'



function Messages() {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState(["ABC","ADC"])

    const onChangeHandler = (e) =>{
        setInput(e.target.value)
    }

    const onClickHandler = (e) =>{
        e.preventDefault()
    }

    
    return (
        <div>
            <div>
                {messages}
            </div>
            <form >
                <input type="text" onChange={onChangeHandler} />
                <button type="submit" onClick={onClickHandler}>Send Message</button>
            </form>
        </div>
    )
}

export default Messages
