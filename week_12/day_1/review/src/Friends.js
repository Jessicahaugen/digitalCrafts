import React, { Component } from 'react'

export default class Friends extends Component {
    constructor(props){
        super(props);
        
        this.state={ 
            friends:0,
        }


    }
    render() {
        return (
            <div>
                <p>here are our friends:{this.state.friends}</p>
                <button onClick={() => this.setState({
            friends:this.state.friends + 1,
            })}
            >Add Friends</button>

                
            </div>
        )
    }
} 

