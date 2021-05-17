import React, { useState } from 'react'
import Messages from '../containers/Messages'

import "./Username.css"

function Username(props) {
    const [input, setInput] = useState("")
    const [display, setDisplay] = useState(true)

    const onNameHandler = (e) =>{
        setInput(e.target.value)
    }

    const onButtonHandler = () =>{
        setDisplay(false)
        setInput("")
        props.username(input)
    }



    return (
        <div className="username">
            <h1>Enter your name</h1>
            <div className="username__inputs">
                <input type="text" value={input} onChange={onNameHandler} />
                <button onClick={onButtonHandler}>Let's Go</button >
            </div>
            
        </div>
    )
}

export default Username
