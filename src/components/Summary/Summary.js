import React from 'react'
import './Summary.css'

export function Summary({ info }) {
    return (
        <ul className='list-group list-group-flush'>
            <li className="list-group-item">{ info.name }</li>
            <li className="list-group-item">{ info.sport }</li>
            <li className="list-group-item">{ info.gender }</li>
            <li className="list-group-item">{ info.birth }</li>
            <li className="list-group-item">{ info.description }</li>
            <li className="list-group-item">{ info.location }</li>
            <li className="list-group-item">{ info.team }</li>
        </ul>
    )
}