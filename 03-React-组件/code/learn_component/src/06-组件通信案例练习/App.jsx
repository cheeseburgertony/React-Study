import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titles: ['流行', '新款', '精选'],
      tabIndex: 0
    }
  }
  handleTab(index) {
    this.setState({ tabIndex: index })
  }

  render() {
    const { titles, tabIndex } = this.state

    return (
      <div className='app'>
        <TabControl switchTab={(index) => this.handleTab(index)} titles={titles} />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App