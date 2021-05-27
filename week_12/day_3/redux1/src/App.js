
import './App.css';
import Counter from './componenets/Counter';
import {useState} from 'React'



function App() {
  const [counter,setCounter] = useState(0)
  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter}/>
    </div>
  );
}

export default App;
