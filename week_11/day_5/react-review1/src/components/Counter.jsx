import {useState} from 'react'

export default function Counter(props) {
    const [count, setCount] = useState(40)
    return (
        <div>
            <button onClick={() => setCount(count-1)}>UPGRADE MY COOKIES + </button>
            <h1>{props.greet} needs {count} cookies</h1>
            <button onClick={() => setCount(count+1)}>TAKE MY COOKIES</button>

        </div>
    )
}
