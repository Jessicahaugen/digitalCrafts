
import './App.css';
import CardContainer from './Components/CardContainer';
import {data} from "./data/data"

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <CardContainer pokemonData={data} />
      
    </div>
  );
}

export default App;
