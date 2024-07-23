import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      fontSize: 30
    }
  }

  updateFontSize() {
    this.setState({ fontSize: this.state.fontSize + 1 })
  }

  render() {
    const { fontSize } = this.state
    return (
      <div>
        <button onClick={e => this.updateFontSize()}>修改fontSize</button>
        {/* 优点：1.样式之间不会产生冲突 2.可以动态获取当前的state状态 */}
        {/* 缺点：1.写法上需要使用驼峰标识 2.某些样式没有提示 3.写大量样式时代码容易混乱 4.某些样式无法编写(比如伪类/伪元素) */}
        <h2 style={{ color: 'pink', fontSize: `${fontSize}px` }}>我是标题</h2>
        <p style={{ color: 'skyblue', fontSize: '20px' }}>我是内容</p>
      </div>
    )
  }
}

export default App