import React, { createRef, PureComponent } from 'react'

class HelloWorld extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }
  test() {
    console.log('this is test');
  }

  render() {
    return (
      <div>
        <h2>Hello World</h2>
      </div>
    )
  }
}

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {}

    this.titleRef = createRef()
  }

  // 获取类组件实例
  getComponet() {
    // 直接通过createRef先创建一个ref对象，再在组件身上使用ref进行绑定，之后即可获取该组件实例，可以调用该组件身上的方法
    console.log(this.titleRef.current);
    this.titleRef.current.test()
  }
  render() {

    return (
      <div>
        <HelloWorld ref={this.titleRef} />
        <button onClick={() => this.getComponet()}>获取组件实例</button>
      </div>
    )
  }
}

export default App