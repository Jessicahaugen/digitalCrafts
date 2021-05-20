import React, { Component } from 'react';

class Cards extends Component {
        state = {
            flip: false
        }
        render() {
            
        console.log(this.props.pokeName)
        const {hp,name,sprites,} = this.props.pokemon
        const uppercased = name.toUpperCase()
        
        
        return (
            <div className="pokemon-card">
                <img onMouseLeave={()=> this.setState({flip: !this.state.flip})} onMouseOver={()=> this.setState({flip: !this.state.flip})} src={this.state.flip ?  sprites.back : sprites.front } alt="" />
                <h3>{uppercased}</h3>
                <p> 🧡 HP: {hp}</p>              
                            
            </div>
        );
    }
}

export default Cards;