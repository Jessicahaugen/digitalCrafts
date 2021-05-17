import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <footer className="Footer">{this.props.footerText}</footer>
            </div>
        )
    }
}
