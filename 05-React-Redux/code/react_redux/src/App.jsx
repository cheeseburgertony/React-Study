import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './style.css'
import store from './store'
import About from './pages/About'
import Category from './pages/Category'

export class App extends PureComponent {
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

  render() {
    const { count } = this.state
    return (
      <div>
        <h2 className='title'>App Counter: {count}</h2>
        <div className="page">
          <Home />
          <Profile />
          <About />
          <Category />
        </div>
      </div>
    )
  }
}

export default App