import React, { Component } from 'react'
import '../App.css';
import AboutMe from './AboutMe.js'

class AboutContainer extends Component {
    render() {
        return (
            <div className="AboutContainer">
                <h1>Software Engineer</h1>
                <AboutMe />

            </div>
        )
    }
}
export default AboutContainer;