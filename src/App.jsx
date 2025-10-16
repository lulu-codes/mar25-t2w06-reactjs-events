import React from "react";
import { PokemonSearcher } from "./components/PokemonSearcher";


// export default function App (){}

export class App extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 0
    }
  }

  render(){
    return <>

      <PokemonSearcher />

      <button onClick={() => {
        this.setState((previousState) => {
          return {
            count: previousState.count + 1
          }
        })
      }}>
        Count is: {this.state.count}
      </button>
      <p>Some other content within the App component</p>
    </>
  }

}
