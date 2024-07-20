import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 100
    }
  }

  changeCount(count) {
    console.log(count);
    this.setState({ counter: this.state.counter + count })
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>{counter}</h2>
        <AddCounter addCount={(count) => this.changeCount(count)} />
        <SubCounter subCount={(count) => this.changeCount(count)} />
      </div>
    )
  }
}

export default App