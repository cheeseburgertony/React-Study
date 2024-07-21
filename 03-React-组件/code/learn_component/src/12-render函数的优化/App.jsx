import React, { Component } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World',
      count: 0
    }
  }

  changeText() {
    this.setState({ message: 'Hello React' })
    // this.setState({ message: 'Hello World' })
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  // 通过shouldComponentUpdate，在其中通过判断state是否发生改变来决定是否重新进行render渲染
  shouldComponentUpdate(nextProps, nextState) {
    // 如果发生改变了则重新进行渲染
    // 自己对比state是否发生改变：this.state和nextState进行比较
    if (this.state.message !== nextState.message || this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  render() {
    const { message, count } = this.state
    console.log('App render');
    return (
      <div>
        <h2>App</h2>
        <div>message:{message}</div>
        <div>count:{count}</div>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.increment()}>count+1</button>
        <Home message={message} />
        <Recommend count={count} />
        <Profile message={message} />
      </div>
    )
  }
}

export default App