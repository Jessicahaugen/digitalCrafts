import React, { Component } from 'react'
import '../App.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <nav>
                <ul>
                    <li><i class="fab fa-facebook-f"></i><span>Facebook</span></li>
                    <li><i class="fab fa-twitter"></i><span>Twitter</span></li>
                    <li><i class="fab fa-instagram"></i><span>Instagram</span></li>
                    <li><i class="fab fa-linkedin-in"></i><span>Linkedin</span></li>
                    <li><i class="fab fa-github"></i><span>Github</span></li>
                    
                </ul>
            </nav>
                
            </div>
        )
    }
}
export default Sidebar;
