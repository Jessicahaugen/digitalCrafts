import React from 'react'

export default function Movie(props) {
    console.log(props)
    return (
        <div className="movieContainer">
            <img alt="movie tag" src={props.movie.Poster} height="250" width="150"/>
            <h1>{props.movie.Title}</h1>
            <h3>{props.movie.Year}</h3>
            

        </div>
    )
}
