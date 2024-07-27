import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: 100
    }
  }

  componentDidMount() {
    document.title = this.state.count
  }

  componentDidUpdate() {
    document.title = this.state.count
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>当前计数：{count}</h2>
        <button onClick={e => this.setState({ count: this.state.count + 1 })}>+1</button>
      </div>
    )
  }
}

export default App