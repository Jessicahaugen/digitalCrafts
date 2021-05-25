import {useState} from 'react'
import MovieResultsContainer from './MovieResultsContainer'

export default function MovieSearchBar() {
    const [userSearch, setUserSearch] = useState('')
    const [doSearch, setDoSearch] = useState(false);

    const handleSubmit = () => {
        setDoSearch(true);
    }

    return (
        <div>
            <input onChange={(e)=> setUserSearch(e.target.value)}type="text" value={userSearch} placeholder="Search Your Favorite Motion Picture"/>
            <button type="submit" onClick={(e) => handleSubmit()}>Search</button>
            {doSearch && <MovieResultsContainer userSearch={userSearch} />}
        </div>
    )
}

// import {useState} from 'react'
// import MovieResultsContainer from './MovieResultsContainer'

// function SearchBar({ setValueToSearchAgainst }) {
//     const [userSearch, setUserSearch] = useState('');

//     return (
//         <>
//             <input onChange={(e)=> setUserSearch(e.target.value)}type="text" placeholder="Search Your Favorite Motion Picture"/>
//             <button type="submit" onClick={(e) => setValueToSearchAgainst(userSearch)}>Search</button>
//         </>
//     );
// }

// export default function MovieSearchBar() {
//     const [valueToSearchAgainst, setValueToSearchAgainst] = useState('');

//     return (
//         <div>
//             <SearchBar setValueToSearchAgainst={setValueToSearchAgainst} />
//             <MovieResultsContainer userSearch={valueToSearchAgainst} />
//         </div>
//     )
// }
