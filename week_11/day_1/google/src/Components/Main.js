import React, { Component } from 'react'
import image from "./pngwing.com.png"


export default class main extends Component {
    render() {

        return (
            <div className="googleLogo">
                <img src={image} alt="googleImg" height="500" width="500"/>
            </div>
        )
    }
}
