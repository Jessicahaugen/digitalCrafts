import React from 'react'

export default function UserDetails(props) {
    console.log(props)
    return (
        <div>
            <h1> User Details</h1>
            {props.firstName}
            {props.lastName}
            {props.email}
            {props.password}
        </div>
    )
}
