import React from "react";
import { PokemonSearcherDataDisplay } from "./PokemonSearcherDataDisplay";
import { PokemonSearcherForm } from "./PokemonSearcherForm";


export class PokemonSearcher extends React.Component {
	constructor(){
		super();

		// data that this component must track
		this.state = {
			pokemonToSearch: "pikachu",
			responseName: "",
			responseSpriteUrl: "",
			// Saving the whole API response to an object is fine
			// for prototyping, but provides heaps of room for mistakes as the project grows
			// so try to only track specific properties from the API!
			// response: {}
		}

		this.formSubmissionHandlerFunction = this.formSubmissionHandlerFunction.bind(this);
	}

	// have an event for handling form submission
	async formSubmissionHandlerFunction (formSubmissionEvent) {
		formSubmissionEvent.preventDefault();
		console.log("Form submission interrupted! Can do our custom form submission logic now!");

		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.state.pokemonToSearch);
		let data = await response.json();

		this.setState((previousState) => {
			return {...previousState,
				responseName: data.name,
				responseSpriteUrl: data.sprites.other.home.front_default
			}
		})
	}


	render(){
		return <section className="pokemonSearcherContainer">

				<PokemonSearcherForm
					currentSearchFieldValue={this.state.pokemonToSearch}
					searchValueUpdateFunction={(newSearchValue) => {
						this.setState((previousState) => {
							return {...previousState, pokemonToSearch: newSearchValue}
						})
					}}
					formSubmissionHandler={this.formSubmissionHandlerFunction}

				/>


			 	<PokemonSearcherDataDisplay
					nameToShow={this.state.responseName}
					imageToShow={this.state.responseSpriteUrl}
				/>

		</section>
	}
}
