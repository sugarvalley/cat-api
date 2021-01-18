import React, {useState} from "react";
import {Hello} from "./FetchRandomDog";
import './App.css';

function App() {
    const [showHello, setShowHello] = useState(false);



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
                        <form method="get">
                            <label>Choose a breed:</label><br/>
                            <select id="breed" name="Breed">

                            </select>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
                <div className="Right">
                    <div className="Button">
                        <p>Not sure, what breed is for you?</p>
                        <p>Go random!</p>
                        <button id="Random" onClick={() => setShowHello(!showHello)}>RANDOM</button>
                    </div>
                    <div className="Button-result">
                        {showHello && <Hello/>}

                    </div>
                </div>
            </div>
            <div className="Mid-bot"></div>
            <div className="Bot"></div>
        </div>
    )
}

export default App;
