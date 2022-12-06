import React from 'react'
import './BasicInfo.css'
import Select from 'react-select';

export function BasicInfo({ info, handleInfo }) {
    const sports = ["Golf", "Tennis", "Cricket", "Basketball", "Baseball", "American Football", "Aquatics", "Archery", "Automobile Racing", "Badminton", "Beach Volleyball", "Bobsleigh", "Body Building", "Boxing", "Cross Country Running", "Cross Country Skiing", "Curling", "Cycling", "Darts", "Decathlon", "Down Hill Skiing", "Equestrianism", "eSports", "Fencing", "Field Hockey", "Figure Skating", "Gymnastics", "Ice Hockey", "Martial Arts", "Mixed Martial Arts", "Modern Pentathlon", "Motorcycle Racing", "Netball", "Polo", "Racquetball", "Rowing", "Rugby", "Sailing", "Softball", "Shooting", "Skateboarding", "Skeet Shooting", "Skeleton", "Snow Boarding", "Soccer (Football)", "Squash", "Surfing", "Swimming", "Track and Field"]

    return (
        /**
         * TODO: add profile picture property
         * keep profile pictures on an image hosting tool
         * save references to the image id to the mongo document
         */
        <form className='form-group'>
            <label>Athlete Name:</label>
            <input className='form-control input' required={true} name="name" type="text" placeholder='Name...' defaultValue={info.name} onChange={event => handleInfo('name', event.target.value == "" ? false : event.target.value)} />
            
            <label>Sport:</label>
            <select className='form-control input' name="sport" defaultValue={info.sport} onChange={event => handleInfo('sport', event.target.value == "" ? false : event.target.value)}>
                <option value="" default>Select...</option>
                {sports.map(sport => <option key={sport} value={sport}>{sport}</option>)}
            </select>
            
            <label>Gender:</label>
            <select className='form-control input' name="gender" defaultValue={info.gender} onChange={event => handleInfo('gender', event.target.value == "" ? false : event.target.value)}>
                <option value="" default>Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            
            <label>Date of Birth:</label>
            <input className='form-control input' name="birth" type="date" defaultValue={info.birth} onChange={event => handleInfo('birth', event.target.value == "" ? false : event.target.value)} />
        </form>
    )
}