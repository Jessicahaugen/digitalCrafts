import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {fillArray} from '../src/Action/AppActions'


function App() {
  const blankArray = useSelector((state) => state.blankArray);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>{blankArray.map((p) => (
        <p>{p.name}</p>
      ))}</h1> 
      <button onClick={() => fillArray(dispatch)}>Add to Array</button>
     
    </div>
  );
}

export default App;
