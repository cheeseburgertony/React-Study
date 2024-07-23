import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './style.css'
import store from './store'

export class App extends PureComponent {
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

  render() {
    const { count } = this.state
    return (
      <div>
        <h2 className='title'>App Counter: {count}</h2>
        <div className="page">
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

export default App