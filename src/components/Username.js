import React, { useState } from 'react'
import "./Username.css"

function Username(props) {
    const [input, setInput] = useState("")
    const [display, setDisplay] = useState(true)
    
    const onNameHandler = (e) =>{
        setInput(e.target.value)
    }

    const onButtonHandler = () =>{
        
        props.username(input)
        setDisplay(false)
    }

    

    return (
        <div  className="username" style={{transform: display ? "translate(-50%,-50%)" : "translate(-50%,-100vh)"}}>
            <h1 >Enter your name</h1>
            <div className="username__inputs">
                <input type="text" value={input} onChange={onNameHandler} />
                <button onClick={onButtonHandler}>Let's Go</button >
            </div>
            
        </div>
    )
}

export default Username
