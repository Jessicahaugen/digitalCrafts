
import './App.css';
import Class from "./class"
import Cars from "./Cars"
import Friends from "./Friends"
import Animals from "./Animals"
import Glasses from "./Glasses"

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Class />
        <Cars />
        <Animals />
        <Friends />
        <Glasses />
      </div>
    )
  }
}

