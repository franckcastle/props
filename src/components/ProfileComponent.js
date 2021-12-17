import React from 'react'

export default function ProfileComponent(props) {
    
    return (
        <>
            <h2>{props.fullName}</h2>
            <h2>{props.bio}</h2>
            <h2>{props.profession}</h2>
            <img src={props.children} className='tass' alt="taswira" />
            <button onClick={props.handle}>say hello</button>

        </>
    )
}

