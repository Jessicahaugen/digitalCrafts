import React, { Component } from 'react'
import '../App.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <nav>
                <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i><span>Facebook</span></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i><span>Twitter</span></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i><span>Instagram</span></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i><span>Linkedin</span></a></li>
                    <li><a href="#"><i class="fab fa-github"></i><span>Github</span></a></li>
                    
                </ul>
            </nav>
                
            </div>
        )
    }
}
export default Sidebar;
