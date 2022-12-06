import React, { createContext } from 'react'
import './About.css'

export function About({ info, handleInfo }) {
    function handleNext(event) {
        event.preventDefault();
        const form = event.target
        const aboutInfo = {
            description: form.description.value,
            location: form.location.value,
            team: form.team.value,
        }
        const AboutContext = React.createContext(aboutInfo)
        console.log(AboutContext)
    }
    /**
     * TODO: implement an auto complete feature for locations
     * will ensure that the location is real
     * i.e. react-places-autocomplete
     */
    return (
        <form className='form-group' onSubmit={(event) => handleNext(event)}>
            <label>Description:</label>
            <input className='form-control input' defaultValue={info.description} name="description" placeholder='Description...' type="text" onChange={event => handleInfo('description', event.target.value == "" ? false : event.target.value)} />
            
            <label>Location (City/State):</label>
            <input className='form-control input' defaultValue={info.location} name="location" placeholder='Location...' type="text" onChange={event => handleInfo('location', event.target.value == "" ? false : event.target.value)} />
            
            <label>Team:</label>
            <input className='form-control input' defaultValue={info.team} name="team" placeholder='Team...' type="text" onChange={event => handleInfo('team', event.target.value == "" ? false : event.target.value)} />
        </form>
    )
}