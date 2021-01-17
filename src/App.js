import React, { Component } from "react";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pics: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.thedogapi.com/v1/images/search?api_key=525bdeb0-e806-4443-a50e-93404bf3709b')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    pics: json,
                    isLoaded: true
                })
            });
    }

    render() {
        var {pics} = this.state;
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
                                <button id="Random">RANDOM</button>
                            </div>
                            <div className="Button-result">
                                {pics.map(data => (
                                    <img src={data.url} alt="dog" id="RandomDog"/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="Mid-bot"></div>
                    <div className="Bot"></div>
                </div>
            );
        }
    }
export default App;
