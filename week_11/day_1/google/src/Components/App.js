
import './App.css';
import React from 'react'
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"
import Buttons from "./Buttons"
import Search from "./Search"




function App () {
 
  
  // Just passing props to practice I realize not necessary!
  const footerText = "this is my google footer";

  return (
  
    
      <div className="root">
        <Nav />
          <div className="main">
            <Main />
          </div>
          <div className="search">
            <Search />
          </div>
          <div className="buttons">
            <Buttons />
          </div>
        
          <div className="footer">
            <Footer footerText={footerText}/>
          </div>
      </div>
  );
  
}

export default App


