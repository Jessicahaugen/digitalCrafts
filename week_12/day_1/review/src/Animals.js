import React, { Component } from 'react'

export default class Animals extends Component {
    constructor(props){
        super(props);
        
        this.state={ 
            Bear:"yes",
        };


    }
    render() {
        return (
            <div>
                <p>Is there a bear:{this.state.Bear}</p>
                <button
                onClick={() => this.setState({
            Bear:"NO",
            })}

            >Bear?</button>
            </div>
        );
    }
}