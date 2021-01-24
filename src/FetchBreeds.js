import React from 'react';

const Breed = ({breed, group, why, life, temperament, weight, height}) => {
    return(
        <div className="Breed-result">
            <h1 className="Breed-name">{breed}</h1>
            <h3 className="Breed-group">Breed group: {group}</h3>
            <p className="Breed-why">Bred for: {why}</p>
            <p className="Breed-life">Life span: {life}</p>
            <p className="Breed-temperament">Temperament: {temperament}</p>
            <p className="Breed-width">Weight: {weight}</p>
            <p className="Breed-height">Height: {height}</p>
        </div>
    );
};

export default Breed;