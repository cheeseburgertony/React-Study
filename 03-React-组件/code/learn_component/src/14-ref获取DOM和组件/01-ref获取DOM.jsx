import React, { createRef, PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {}

    this.titleRef = createRef()
    this.titleEl = null
  }

  getNativeDOM() {
    // 1.方式一：在React元素上绑定一个ref元素 通过this.refs.绑定的名字进行获取
    // console.log(this.refs.tony);

    // 2.方式二：在constructor提前创建好ref对象，使用createRef()，将创建出来的对象绑定到元素
    // console.log(this.titleRef.current);

    // 3.方式三：传入一个回调函数，在对应的元素被渲染之后，回调函数被执行，并将元素作为参数传入
    console.log(this.titleEl);
  }
  render() {

    return (
      <div>
        <h2 ref="tony">App</h2>
        <h2 ref={this.titleRef}>Hello World</h2>
        <h2 ref={(el) => this.titleEl = el}>Hello React</h2>
        <button onClick={() => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}

export default App