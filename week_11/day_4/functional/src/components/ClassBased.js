import React, { Component } from 'react';

export default class ClassBased extends Component {

    state = {
        loadingmessage: "loading"
    
    };

    render() {
        return (
            <div>
                <h1>Class</h1>
                {this.state.loadingmessage}
            </div>
        );
    }
}
