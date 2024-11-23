import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

// const pokemonList = ['pikachu', 'ditto', 'mew', 'charmander'];

export default class PokemonFetcher extends Component {
    constructor(props) {
        super(props);


        this.state = {
            pokemonList: [],
            jwtToken: null
        }
    }

    async componentDidMount() {
        for (let index = 0; index < 6; index++) {
            // Generate a random Pokemon ID Number form the total amount of Pokemon characters
            let randomNumber = Math.ceil(Math.random() * 1025);
            // Pass random Pokemon Number to fetch
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);// this fetches the data from the api
            let data = await response.json(); // this converts the fetched data to a json list
            // set fetch response data to state file this.state = pokemonList
            // Method 1
            // this.setState({ pokemonList: [...this.state.pokemonList, data.name] });

            // Method 2
            this.setState((previousState) => {
                return {
                    // open existin glist pokemonList and expand it with ... the add new to it with data.name to previousState
                    pokemonList: [...previousState.pokemonList, data.name]
                }
            })
        }
        console.log("PokemonFetcher first load on the page");
    }

    componentDidUpdate(){
        console.log("Page rendered. This is the current state: ", this.state.pokemonList);

        if (this.state.jwtToken) {
            console.log("User is logged in.");
        } else {
            console.log("User is logged out.");
        }
    }

    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {
                    this.state.pokemonList.map((pokemon, index) => {
                        return <PokemonCard key={pokemon + index} name={pokemon} />
                    })
                }
                <button onClick={() => {
                    //on click set the state of pokemonlist to empty
                    this.setState({ pokemonList: [] });
                }}>Empty the state</button>
            </div>
        )
    }
}import React from "react";
