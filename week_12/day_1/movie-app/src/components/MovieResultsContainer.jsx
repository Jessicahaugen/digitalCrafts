import {useEffect, useState} from 'react'
import Movie from './Movie';

export default function MovieResultsContainer(props) {
  const [movies, setMovies] = useState([]);
  // const[emptyMovie, setEmptyMovie] = useState(emptyMovie)

  const userSearch = props.userSearch;

  const getMovies= async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${userSearch}&apikey=22ac846c`, {
      headers: { Accept: "application/json" },
    });
    const convertedMovieData = await response.json();

    const newMovies = convertedMovieData.Search.map(movie=> ({...movie, title: movie.Title, poster: movie.Poster, year: movie.Year}));
    setMovies(newMovies);
  };

  useEffect(() => {
    getMovies();
  }, [userSearch]);

    return (
        <div>
          <h1>Movie Results</h1>

            {movies.map(movie => <Movie key={movie.imdbID} movie={movie} />)}
        </div>
    )
}
