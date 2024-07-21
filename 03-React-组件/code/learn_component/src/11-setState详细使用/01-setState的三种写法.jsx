import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World',
      count: 0
    }
  }
  changeText() {
    // setState的更多用法
    // 1.基本使用  写入一个对象，对象最中会通过Object.assign和之前旧的数据进行合并，并且只更新修改的数据
    // this.setState({
    //   message:'Hello React'
    // })

    // 2.setState可以传入一个回调函数  返回要修改的数据
    // 好处1：可以在会回调函数中编写新的state的逻辑  内聚性更强
    // 好处2：当前的回调函数会将之前的state和props传递进来
    // this.setState((state, props) => {
    //   // 1.编写一些新的state的处理逻辑
    //   // 2.可以获取之前的state和props
    //   console.log(state, props);
    //   return {
    //     message: 'Hello React'
    //   }
    // })

    // 3.setState在React的事件处理中是一个异步调用
    // 如果希望在数据更新之后（数据合并之后），获取到对应的结果执行一些逻辑代码，
    // 那么可以在setState中闯入第二个参数：callback
    this.setState({ message: 'Hello React' }, () => {
      // 数据更新后执行
      console.log('++++++', this.state.message);
    })
    console.log('------', this.state.message);
  }

  render() {
    const { message, count } = this.state
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <h2>当前计数:{count}</h2>
        <button onClick={() => this.increment()}>counter+1</button>
      </div>
    )
  }
}

export default App