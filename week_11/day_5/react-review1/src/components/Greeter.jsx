import {useState} from 'react'
import Counter from './Counter';

export default function Greeter() {
   const [greet, setGreet] = useState('Jess')
    
    const handleChange = (e) => {
        e.preventDefault()
        setGreet(e.target.value);
        
    }

   return (
        <div>
            <h1>YO {greet}</h1>
            <input onChange={handleChange}type="text" />
            <Counter greet={greet} />
            
        </div>
    )
}
