import React, {useState, useEffect} from "react";
import Random from "./FetchRandomDog";
import Breed from "./FetchBreeds";
import './App.css';


const App = () => {
    const API_KEY = "525bdeb0-e806-4443-a50e-93404bf3709b";
    const [random, setRandom] = useState([]);
    const [breed, setBreed] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('samoyed');
    const [randomQuery, setRandomQuery] = useState('');

    useEffect(() => {
        getBreed();
    }, [query]);

    useEffect(() => {
        getRandom();
    }, [randomQuery]);

    const getBreed = async () => {
        const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?api_key=${API_KEY}&q=${query}`);
        const data = await response.json();
        setBreed(data);
    }

    const getRandom = async () => {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?api_key=${API_KEY}`);
        const data = await response.json();
        setRandom(data);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    const getRandomFetch = e => {
        e.preventDefault();
        setRandomQuery(random);
    }

    return (
        <div className="App">
            <div className="Top">
                <header className="Header">
                    DOG API - get to know dogs!
                </header>
            </div>
            <div className="Mid">
                <div className="Left">
                    <div className="Form">
                        <form onSubmit={getSearch} className="Search-form" method="get">
                            <label>Search by breeds:</label><br/>
                            <input
                                className="Search-bar"
                                type="text"
                                value={search}
                                onChange={updateSearch}>
                            </input>
                            <button className="Search-button" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                    <div>
                        {breed.map(breeds => (
                            <Breed
                            breed={breeds["name"]}
                            group={breeds["breed_group"]}
                            why={breeds["bred_for"]}
                            life={breeds["life_span"]}
                            temperament={breeds["temperament"]}
                            weight={breeds.weight["metric"]}
                            height={breeds.height["metric"]}
                            img={breeds["reference_image_id"]}
                            />
                        ))}

                    </div>
                </div>
                {/*<div className="Puppies">*/}
                {/*    <img src="https://i.pinimg.com/originals/eb/19/20/eb192033f2e2c7df5ba254ec22d207f2.png" alt="puppies"/>*/}
                {/*</div>*/}
                <div className="Right">
                    <div className="Button">
                        <p>Not sure, what breed is for you?</p>
                        <p>Go random!</p>
                        <button className="Random-button" onClick={getRandomFetch}>RANDOM</button>
                    </div>
                    <div className="Button-result">
                        {random.map(randomdog => (
                           <Random
                               key={randomdog.id}
                               image={randomdog.url}
                               breed={randomdog.breeds[0].name}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="Bot"></div>
        </div>
    );
};

export default App;
