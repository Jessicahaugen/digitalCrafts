import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {changeJesstoJoe} from '../src/Actions/AppActions'


function App() {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>{name}</h1>
      <button onClick={() => changeJesstoJoe(dispatch)}>Change Name </button>
     
    </div>
  );
}

export default App;
