import {useEffect} from 'react'
import {useState} from 'react'
import Jokes from './Jokes'

export default function JokeContainer() {
    const [joke,setJoke] = useState("");
    const [name,setName] = useState("Jess");

    const getDad = async () => {
       const dadData= await fetch('https://icanhazdadjoke.com', {
           headers: {"accept":"application/json"}
       })
        .then(dadData => dadData.json())
        setJoke(dadData)
    }

    useEffect(() => {
        getDad()    
      }, [])

    return (
        <div>
            <h1>Joke container</h1>
            <Jokes joke={joke}/>
            <button onClick={()=> getDad()}>JOKE GENERATOR</button>
{/*             


            // unfinished examples. */}
        </div>
    )
}
