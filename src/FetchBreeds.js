import React, {useState, useEffect} from 'react';

const Breed = ({breed, group, why, life, temperament, weight, height, img}) => {

    const [image, setImage] = useState('');

    useEffect(() => {
        getImage();
    }, [breed]);

    const getImage = async () => {
        const imgurl = await fetch(`https://api.thedogapi.com/v1/images/${img}?api_key=525bdeb0-e806-4443-a50e-93404bf3709b`);
        const imgu = await imgurl.json();
        setImage(imgu);
    }

    return(
        <div className="Breed-result">
            <h1 className="Breed-name">{breed}</h1>
            <h3 className="Breed-group">Breed group: {group}</h3>
            <p className="Breed-why">Bred for: {why}</p>
            <p className="Breed-life">Life span: {life}</p>
            <p className="Breed-temperament">Temperament: {temperament}</p>
            <p className="Breed-width">Weight: {weight}</p>
            <p className="Breed-height">Height: {height}</p>
            <img src={image.url} alt="no photo"/>
        </div>
    );
};


export default Breed;