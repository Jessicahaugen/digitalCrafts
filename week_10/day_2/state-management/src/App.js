
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    
    
    
    
    this.state = {
      counter: 0,
      isitraininginHouston: true,
    }
  }


  // state = {

  // }

  render() {
    const {counter, isitraininginHouston} = this.state;

    return (
      <>
        <h1> state management</h1>
        <p>Counter {counter}</p>
        <button 
          onClick={ () => 
            this.setState({
              counter: this.state.counter + 1,
            }) 
          }
        >
         add
        </button>

        <button>subtract</button>
        <input type="text" onBlur={(e)=> (console.log("yay"))} />
        <p>
          Is it raining in houston? {""}
          {isitraininginHouston ? (
            <div>
              <p>Yep</p>
            </div>
            ) : (
            <div>
              <p>nope</p>
            </div>
            
          )}
        
        </p>
      </>
    )
  }
}

