import React from 'react';
import People from './People'
import './StarWars.css';

function CharacterList(props) {
    return (
        props.starwarsChars.map(function (eachChar) {
            return <People eachChar={eachChar}/>
        })
    )
};

export default CharacterList;