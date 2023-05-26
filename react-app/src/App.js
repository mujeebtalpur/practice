// import logo from './logo.svg';
import './App.css';
import {Hello,Kami} from './MKC/HelloKami';
import CBC from './MKC/CBC';
import MyBtn from './MyBtn';
import {Greet} from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">
      <h1>This is my first React App</h1>
      <MyBtn/>
      <Greet></Greet>
      <Welcome/>
      <Message/>
    </div>
  );
}

export default App;
