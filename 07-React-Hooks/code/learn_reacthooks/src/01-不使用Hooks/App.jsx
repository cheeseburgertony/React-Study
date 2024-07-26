import React, { PureComponent } from 'react'

class HelloWorld extends PureComponent {
  constructor() {
    super()
    this.state = {
      msg: 'Hello World'
    }
  }
  render() {
    const { msg } = this.state
    return (
      <div>
        <h2>类组件内容：{msg}</h2>
        <button onClick={e => this.setState({ msg: 'Hello React' })}>修改文本</button>
      </div>
    )
  }
}

const HelloWorld2 = () => {
  let msg = 'Hello World'

  /**
   * 函数式组件存在的最大的缺陷(在没有hooks的情况下)：
   * 1.组件不会被重新渲染。例如这里修改msg之后，组件不知道自己要重新进行渲染
   * 2.如果页面重新渲染，函数也会被重新执行，第二次重新执行的时候，会重新给msg赋值为Hello World，相当于又被初始化赋值了
   * 3.函数组件没有类似于生命周期的回调函数
   */


  return (
    <div>
      <h2>函数组件内容：{msg}</h2>
      <button onClick={e => msg = 'Hello React'}>修改文本</button>
    </div>
  )
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <HelloWorld />
        <HelloWorld2 />
      </div>
    )
  }
}

export default App