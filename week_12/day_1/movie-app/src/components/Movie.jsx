import React from 'react'

export default function Movie(props) {
    console.log(props)
    return (
        <div className="movieContainer">
            <img src={props.movie.Poster}/>
            <h1>{props.movie.Title}</h1>
            <h3>{props.movie.Year}</h3>
            

        </div>
    )
}
