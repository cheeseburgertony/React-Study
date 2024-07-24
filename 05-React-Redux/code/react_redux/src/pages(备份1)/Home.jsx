import React, { PureComponent } from 'react'
import store from '../store'
import { addNumAction } from '../store/actionCreator'

export class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: store.getState().count
    }
  }

  componentDidMount() {
    store.subscribe(()=>{
      const state = store.getState()
      this.setState({ count: state.count })
    })
  }

  addNum(num) {
    store.dispatch(addNumAction(num))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>Home Counter: {count}</h2>
        <button onClick={e => this.addNum(1)}>+1</button>
        <button onClick={e => this.addNum(5)}>+5</button>
        <button onClick={e => this.addNum(10)}>+10</button>
      </div>
    )
  }
}

export default Home