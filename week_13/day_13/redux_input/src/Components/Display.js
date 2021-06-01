import React from 'react'
import {useSelector} from 'react-redux'


export default function Display() {
   const userInfo = useSelector(state => state.userInfoReducer)

    return (
        <div>
            <h1>User Info</h1>
            <p>{userInfo.email}</p> 
            <p>{userInfo.username}</p>
            
            
        </div>
    )
}
