import {useState} from 'react'
import MovieResultsContainer from './MovieResultsContainer'

export default function MovieSearchBar() {
    const [userSearch, setUserSearch] = useState('')
    const [doSearch, setDoSearch] = useState(false);
    // const[error,setError]= useState(false)
    // const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        setDoSearch(true);
        // if (userSearch.length <= 2)  {
        //     alert("NEED MORE INFO");
        // }
        
    }
   


    return (
        <div className="searchBar">
            <h1>Groovy Movies</h1>
            <input onChange={(e)=> setUserSearch(e.target.value)}type="text" value={userSearch} placeholder={"Search Your Favorite Motion Picture"}/>
            <button type="submit" onClick={(e) => handleSubmit()}>Search</button>
            {doSearch && <MovieResultsContainer userSearch={userSearch} setDoSearch={setDoSearch} setUserSearch={setUserSearch}  />}
        </div>
    )
}

