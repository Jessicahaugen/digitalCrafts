import React, { Component } from 'react'

export default class Glasses extends Component {
    constructor(props){
        super(props);
        
        this.state={ 
            glasses: "",
        };


    }
    render() {
        return (
            <div>
                <label for="change">What type of glasses?</label>
                
                <select class="change" onChange={(e) => this.setState({
                    glasses: e.target.value,
                })}>
                    <option value="SunGlasses">Sunglasses</option>
                    <option value="Bluelight">Bluelight</option>
                    <option value="Prescription">Prescription</option>
                </select>
                <p>Congrats You got {this.state.glasses}</p>
              

                
            </div>
        )
    }
}
