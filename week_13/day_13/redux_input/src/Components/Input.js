import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addUsername} from '../Actions/actions'
import {addEmail} from '../Actions/actions'
import {storeUserDetails} from '../Actions/actions'


export default function Input() {

const dispatch = useDispatch();
const username = useSelector((state) => state.username);
const email = useSelector((state) => state.email);

    return (
        <div>
            <h1>inputssss</h1>
            <form> 
                <input onChange={(e) => addUsername(dispatch,e.target.value)} type="text" className="userName" placeholder="Enter User Name Here"></input>
                <input onChange={(e)=> addEmail(dispatch, e.target.value)}type="email" className="email" placeholder="Enter Email here"></input>
            </form>
            <button onClick={() => storeUserDetails(dispatch, username, email)}>Submit</button>
            
        </div>
    )
}
