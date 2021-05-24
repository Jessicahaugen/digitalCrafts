import React, { Component } from 'react'
import '../App.css';


export default class Form extends Component {
    state = { 
        firstname:"",
        lastname:"",
        apt:"",
        postal:"",
        city:"",
        state:"",
        country:"",
        phone:""

    };

    handleInputForm= (e) => {

        this.setState({
        [e.target.name]:e.target.value,
        // [e.target.lastname]:e.target.value,
        // [e.target.apt]:e.target.value,
        // [e.target.postal]:e.target.value,
        // [e.target.city]:e.target.value,
        // [e.target.state]:e.target.value,
        // [e.target.country]:e.target.value,
        // [e.target.phone]:e.target.value

        });

    }
    handleSubmit = (e) => {
        e.preventdefault();
        const { firstname,
        lastname,
        apt,
        postal,
        city,
        state,
        country,
        phone
        } = this.state
        const formData = {
            username: firstname + lastname,
            address: apt + postal + city + state + country,
            phone:phone

        }
        // const formDatasub = await fetch(url {formData})

        
    }

    render() {
        return (
            <div>
              <h1 className="shippingFormHeader">Forms React</h1>
                <div className="shippingFormContainer">
                    <form action="" className="shippingForm" onSubmit={this.handleSubmit}
                        >
                        <input value={this.state.firstname} name="firstname" onChange={this.handleInputForm} type="text" placeholder="firstname" />
                        <input value={this.state.lastname} type="text" placeholder="lastname"  name="lastname" onChange={this.handleInputForm}/>
                        <input value={this.state.street} className="shippingInputStreet" name="street" type="text" placeholder="Street Address" onChange={this.handleInputForm} />
                        <input value={this.state.apt} className="shippingInputApt"type="text" name="apt" placeholder="Apt, suite" onChange={this.handleInputForm}/>
                        <input value={this.state.postal} type="text" placeholder="Postal Code" onChange={this.handleInputForm}/>
                        <input value={this.state.city} type="text" placeholder="city" onChange={this.handleInputForm}/>
                        <input value={this.state.state} type="text" placeholder="state" onChange={this.handleInputForm}/>
                        <input value={this.state.country} type="text" placeholder="Country" onChange={this.handleInputForm}/>
                        <input value={this.state.phone} type="text" placeholder="Phone" onChange={this.handleInputForm}/>
                        <input className="shippingInputSubmit" type="submit" onChange={this.handleSubmitForm}/>
                    </form>
                </div>
                        
            </div>
        )
    }
}
