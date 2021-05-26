import React from "react";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const blankArray = useSelector((state) => state.blankArray);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>{blankArray.map((p) => (
        <p>{p.name}</p>
      ))}</h1> 
      <button onClick={() => dispatch({ type: "CHANGE" })}>Add to Array</button>
     
    </div>
  );
}

export default App;
