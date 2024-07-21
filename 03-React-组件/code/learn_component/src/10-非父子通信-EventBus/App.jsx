import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utlis/event-bus'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: 0
    }
  }

  bannerPrevClick(name, age) {
    console.log('HomeBanner中的prev:', name, age);
    this.setState({ name, age })
  }

  bannerNextClcik(info) {
    console.log('HomeBanner中的next:', info);
  }

  componentDidMount() {
    // 监听事件总线上的事件   eventBus.on('bannerPrev', 回调函数, this指向)
    eventBus.on('bannerPrev', this.bannerPrevClick, this)
    eventBus.on('bannerNext', this.bannerNextClcik)
  }


  componentWillUnmount() {
    // 组件被卸载时清除监听  eventBus.off('bannerPrev', 回调函数)
    eventBus.off('bannerPrev', this.bannerPrevClick)
    eventBus.off('bannerNext', this.bannerNextClcik)
  }

  render() {
    const { name, age } = this.state
    return (
      <div>
        <h2>App</h2>
        <div>{name}-{age}</div>
        <Home />
      </div>
    )
  }
}

export default App