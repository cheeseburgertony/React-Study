import React, { Component } from 'react'

export class Home extends Component {

  // 通过shouldComponentUpdate，在其中通过判断state和props是否发生改变来决定是否重新进行render渲染
  shouldComponentUpdate(nextProps, nextState) {
    // 如果发生改变了则重新进行渲染
    // 如果当前的props和更新后的props不一致则进行重新渲染
    if (this.props.message !== nextProps.message) {
      return true
    }
    return false
  }
  render() {
    console.log('Home render');
    return (
      <div>
        <h2>Home</h2>
        <div>message:{this.props.message}</div>
      </div>
    )
  }
}

export default Home