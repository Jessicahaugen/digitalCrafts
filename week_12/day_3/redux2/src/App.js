import React from "react";
import { useDispatch,useSelector } from "react-redux";


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
