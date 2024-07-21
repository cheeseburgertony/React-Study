import React, { createRef, forwardRef, PureComponent } from 'react'

// 函数组件中的不能获取到实例，可以通过forwardRef这个高阶函数对ref进行多次传递最终绑定到函数组件中的某一个DOM上
// 获取取到该函数组件中的某一个DOM
const HelloWorld = forwardRef((props, ref) => {
  return (
    <div>
      <h2 ref={ref}>Hello World</h2>
    </div>
  )
})

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {}

    this.hwRef = createRef()
  }

  // 获取函数组件实例
  getComponet() {
    console.log(this.hwRef.current);
  }
  render() {

    return (
      <div>
        <HelloWorld ref={this.hwRef} />
        <button onClick={() => this.getComponet()}>获取组件实例</button>
      </div>
    )
  }
}

export default App