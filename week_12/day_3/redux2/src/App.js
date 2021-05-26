import React from "react";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>{name}</h1> 
      <button onClick={() => dispatch({ type: "CHANGE" })}>Change Name</button>
     
    </div>
  );
}

export default App;
