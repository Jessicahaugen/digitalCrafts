import React, { Component } from 'react'
import Muscle from './Muscle-Car-Section'
import Exotic from './Exotic-Car-Section'
import Motorcycles from './Motorcycles'

export default class Garage extends Component {
    //enter all vehicles here 
    constructor(props){
        super(props);
    
        this.state = {
          vehicles: [
            {
              motorcycles:[
                {american:[{
                    name:"Harley"
                  }
                ]},
                {foreign:[{
                  name:"Kawasaki"
                }
              ]}
              ],
              exotic:[
                {american:[{
                    name:'Cadillac'
                }]},
                {foreign: [{
                    name:"Porsch"
                }]}
              ],
              muscle:[
                {american:[{
                    name:"Mustang"}]},
                {foreign: [{
                    name: "Mercedes AMG"
                }]}
              ],
            
              
            }]
    
    
        }
      }
    render() {
        
        
        return (
            <>
                <p>THIS IS THE GARAGE</p>
                 
                {this.state.vehicles.map((vehicle) => {
                   return <Exotic vehicle={vehicle}/>;
                    // <Motorcycles vehicle={vehicle}/>,
                    // <Muscle vehicle={vehicle}/>
                    
            
                })} 

                {/* <Exotic /> */}
                {/* {this.state.vehicles.map((vehicle) => {
                   return <p>{Object.keys(vehicle)}</p> ;
                   
            
                })
                }  */}

                
             
                
            </>
        )
    }
}
