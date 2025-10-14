import React from "react";


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
