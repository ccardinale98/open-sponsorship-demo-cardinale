import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './List.css'

export function List({ specificAthlete }) {
    const [athletes, setAthletes] = useState([]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        getAthletes();
    }, [value])

    async function getAthletes() {
        try {
            const fetchedAthletes = await axios.get('/api/athlete/');
            console.log(fetchedAthletes.data)
            setAthletes(fetchedAthletes.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='row main'>
            {athletes.length > 0
                ? athletes.map(athlete => 
                    <div className='col-sm-6 cardDiv' onClick={() => specificAthlete(athlete)}>
                        <div className="card">
                            <div className='card-header'>
                                { athlete.name }
                            </div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <li className="list-group-item">{ athlete.description }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
                : <></>
            }
        </div>
    )
}