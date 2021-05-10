import React, { Component } from 'react'
import '../App.css';
import Photo from './IMG_3041.jpg';

class Aboutme extends Component {
    render() {
        return (
            <div className="AboutMe">
                <img src={Photo} alt="jess_pic" className="picture" />
                <p>Hey team! Its Jess, I'm a 26 year old education enthusiast. I hold a Bachelor's in Urban and Public affairs, a Minor in Business Management and hopefully a Digital Crafts boot camp certificate soon! In my spare time I love to travel, read and hike. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa vero fuga impedit modi est tempora, error voluptates praesentium, quisquam qui quis, suscipit numquam corporis laborum quas non ipsum! Similique</p>
            </div>
        )
    }
}
export default Aboutme;