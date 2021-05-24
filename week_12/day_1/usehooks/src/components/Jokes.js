import React from 'react'

export default function Jokes(props) {
    return (
        <div>
            <h1>jokes</h1>
            <h1>{props.joke.joke}</h1>
            
        </div>
    )
}
