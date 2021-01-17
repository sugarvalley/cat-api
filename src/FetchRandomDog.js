import React from "react";

export default class FetchRandomDog extends React.Component {
    state = {
        loading: true,
        dog: null
    };

    async componentDidMount() {
        const request = "https://api.thedogapi.com/v1/images/search?api_key=525bdeb0-e806-4443-a50e-93404bf3709b";
        const response = await fetch(request);
        const data = await response.json();
        this.setState({dog: data.results[0], loading: false});
    }
    render() {
        return (
            <div>

                <img src={this.state.dog.url} alt="doggo"/>
            </div>

        );
    }
}