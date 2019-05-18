
import React from 'react';
import './StarWars.css';


function People (props) {
    return (
        <div className="characterCard">
            <h2>Name:</h2>
            <p>{props.eachChar.name}</p>
            <h2>Gender:</h2>
            <p>{props.eachChar.gender}</p>
            <h2>Birth Year:</h2>
            <p>{props.eachChar.birth_year}</p>
        </div>
    )
}
export default People;



