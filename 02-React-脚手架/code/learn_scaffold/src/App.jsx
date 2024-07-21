import React from "react";
import Hello from "./Components/Hello";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: 'Hello React'
    }
  }
  render() {
    const { msg } = this.state
    return (
      <div>
        <h1>{msg}</h1>
        <Hello />
      </div>
    )
  }
}

export default App