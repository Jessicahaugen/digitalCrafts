import React, { Component } from 'react'
import AmericanEx from './American-Ex-Cars'
import ForeignEx from "./Foreign-Ex-Cars"


export default class Exotic extends Component {
    render() {
        // console.log(this.props.vehicle)
        // const {motorcycles} = this.props.vehicle;
        console.log(this.props)
        const vehicle = this.props.vehicle
        return (
            <div>
                <p>THIS IS EXOTIC CARS</p> 
                {Object.keys(vehicle.exotic[0]).map((exotic) => {
                return(
                <AmericanEx  americanex={exotic.american} />
                );
                })}
                {/* {Object.keys(vehicle).map((exotic) =>{
                return(exotic[0].american);
                })} */}

                {/* <ForeignEx foreignEx={vehicles.exotic[1].american}/> */}
            </div>
        )
    }
}

