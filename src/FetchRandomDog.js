import React from "react";
import './App.css';

const Random = ({breed, image}) => {

    return(
        <div className="RandomResult">
            <h5>{breed}</h5>
            <img className="RandomDog" src={image} alt="doggie"/></div>
    );
};

export default Random;

