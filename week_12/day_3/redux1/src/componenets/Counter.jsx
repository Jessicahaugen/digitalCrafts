import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function Counter(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
   
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch({type: "ADD"})}>Subtract</button>

            <button onClick={() => dispatch({type: "SUBTRACT"})} >Add</button>
        </div>
    )
}
