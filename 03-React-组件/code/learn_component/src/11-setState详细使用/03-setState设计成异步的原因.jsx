import React, { Component } from 'react'
import { flushSync } from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      Hello
      <div>message:{props.message}</div>
    </div>
  )
}

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World',
      count: 0
    }
  }
  changeText() {
    // 在React18之前，setTimeout(Promise,原生等)事件中setState是同步的，只有在React事件中才是异步的
    // 在React18之后，setTimeout(Promise,原生等)事件中setState是异步的，React事件也是异步的

    setTimeout(() => {
      // 可以使用flushSync将整个过程变成同步
      flushSync(() => {
        // 但是里面还是只会执行一次render
        // 里面仍然是批处理的操作
        this.setState({ message: 'Hello React' })
      })
      console.log(this.state.message);
    }, 0)
  }

  increment() {
    // setState设计成异步的原因
    // 1.提高性能 这里获取到多个更新然后进行批量更新
    // 例如这里的三个setState，就会存放到队列中，然后依次执行，最后只调用一次render进行更新渲染
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })

    // 这里写成函数是为了获取更新后的state，因为如果写成this.state.count它只有到最后进行统一更新的时候才会进行更新
    this.setState((state) => ({ count: state.count + 1 }))
    this.setState((state) => ({ count: state.count + 1 }))
    this.setState((state) => ({ count: state.count + 1 }))

    // 2.如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步
    // state和props不能保持一致性，会在开发中产生很多问题
    // 例如：下面的Hello组件，如果setState是同步的，在App中执行setState后改变了message，但是并没有调用render函数进行重新渲染
    // 导致在Hello组件中获取到的props仍然还是之前的数据，这样就会导致App中的state和Hello中的props不一致，开发中会出现很多问题
  }

  render() {
    console.log('render被执行了');
    const { message, count } = this.state
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <h2>当前计数:{count}</h2>
        <button onClick={() => this.increment()}>counter+1</button>
        <Hello message={message} />
      </div>
    )
  }
}

export default App