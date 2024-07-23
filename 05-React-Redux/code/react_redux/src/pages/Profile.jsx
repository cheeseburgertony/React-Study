import React, { PureComponent } from 'react'
import store from '../store'
import { subNumAction } from '../store/actionCreator'

export class Profile extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: store.getState().count
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ count: state.count })
    })
  }

  subNum(num) {
    store.dispatch(subNumAction(num))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>Profile Counter: {count}</h2>
        <button onClick={e => this.subNum(1)}>-1</button>
        <button onClick={e => this.subNum(5)}>-5</button>
        <button onClick={e => this.subNum(10)}>-10</button>
      </div>
    )
  }
}

export default Profile