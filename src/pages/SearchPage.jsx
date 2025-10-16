import { useParams } from "react-router";
import { PokemonSearcher } from "../components/PokemonSearcher";


export function SearchPage(){

	// useParams is a hook that lets us access route parameters,
	// destructure params by name to get variables with relevant data
	let {pokemonName} = useParams();


	return <main>
		<h1>Welcome to the Search Page!</h1>
		{pokemonName && <p>Searching for... {pokemonName}</p>}
		<PokemonSearcher />
	</main>
}
