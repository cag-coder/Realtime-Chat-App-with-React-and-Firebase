import React,{useState, useEffect} from 'react'
import Username from '../components/Username'
import Message from "../components/Message"
import "./Messages.css"
import db from '../Firebase/Firebase'
import firebase from "firebase"
import FlipMove from 'react-flip-move';

function Messages(props) {

    const [input, setInput] = useState("")

    const [messages, setMessages] = useState([])

    const [username, setUsername] = useState("")

    useEffect( () =>{
        db.collection("messages")
        .orderBy("timestamp","asc")
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data()})))
        })
    },[])

    const onChangeHandler = (e) =>{
        setInput(e.target.value)
    }

    const onClickHandler = (e) =>{
        e.preventDefault()

        db.collection("messages").add({
            message: input,
            username:username,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
               
        setInput("")
        
    }

    const onNameHandler = (name) =>{
        setUsername(name)
        
    }

    

   
    
    return (
        <div className="messages">
            <h1>Welcome {username.length > 0 ? username : "Anonymous"}</h1>
            <FlipMove>
                {
                messages.map(({id, message}) => 
                <Message key={id} username={message.username} message={message.message} enteredName={username}/>
                )}

            </FlipMove>
            <form className="messages__form">
                <input type="text" placeholder="Enter your message" value={input} onChange={onChangeHandler} />
                <button type="submit" disabled={!input} onClick={onClickHandler}>Send Message</button>
            </form>
            <Username username={onNameHandler}/>
        </div>
    )
}

export default Messages
