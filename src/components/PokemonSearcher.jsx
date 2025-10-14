import React from "react";
import { PokemonSearcherDataDisplay } from "./PokemonSearcherDataDisplay";

export class PokemonSearcher extends React.Component {
  constructor() {
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
    };
  }

  // have an event for handling form submission

  render() {
    return (
      <section className="pokemonSearcherContainer">
        {/*
				<PokemonSearcherForm
					currentSearchFieldValue={pokemonToSearch}
					searchValueUpdateFunction={() => {this.setState({})}}
					formSubmissionHandler={() => {}}

				/>
			*/}

        <PokemonSearcherDataDisplay
          nameToShow={this.state.responseName}
          imageToShow={this.state.responseSpriteUrl}
        />
      </section>
    );
  }
}
