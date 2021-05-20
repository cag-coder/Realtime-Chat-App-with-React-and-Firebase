import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
    
            apiKey: "AIzaSyA_iaLOJophba4atlM9vLCHZGLkdLK1WBs",
            authDomain: "realtime-chat-670b4.firebaseapp.com",
            projectId: "realtime-chat-670b4",
            storageBucket: "realtime-chat-670b4.appspot.com",
            messagingSenderId: "1008871627108",
            appId: "1:1008871627108:web:0a0e4640703768fea20271"
        
    }
)

const db = firebaseApp.firestore()

export default db
