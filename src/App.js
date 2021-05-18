import db from "./Firebase/Firebase"
import './App.css';
import Messages from "./containers/Messages";
import Username from "./components/Username";

function App() {
  return (
    <div className="App">
      <Messages/> 
    </div>
  );
}

export default App;
