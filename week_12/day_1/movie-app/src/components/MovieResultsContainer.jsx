import {useEffect, useState} from 'react'
import Movie from './Movie';

export default function MovieResultsContainer(props) {
  const [movies, setMovies] = useState([]);
  
  
  
  // const fetchMovieDetails = async (moviesToMatch) => {
  //   for (const movie of moviesToMatch) {
  //     const movieDetails = await fetch(
  //       `http://www.omdbapi.com/?apikey=$22ac846c&i=${movie.imdbID}`
  //     );
  //     const movieDertails = await movieDetails.json();
  //     console.log(movieInfo);
  //     setMovieInfo([movieJson, ...movieInfo]);
  //   }
  // };
  

  const userSearch = props.userSearch;
   

  const getMovies = async () => {
   
    const response = await fetch(`http://www.omdbapi.com/?s=${userSearch}&apikey=22ac846c`, {
      headers: { Accept: "application/json" },
    });
    const convertedMovieData = await response.json();
    
    console.log(convertedMovieData)
    
    if (convertedMovieData.Response === "False") {
     props.setDoSearch(false);
     return;
    }
    

    const newMovies = convertedMovieData.Search.map(movie=> ({...movie, title: movie.Title, poster: movie.Poster, year: movie.Year}));
    setMovies(newMovies);
    
  };
  
  useEffect(() => {
    getMovies();
  }, [userSearch]);
  console.log()
  
  return (
    <div className="moviesBox">    
          {movies.map(movie => <Movie key={movie.imdbID} movie={movie} />)}
        </div>
    )
}
