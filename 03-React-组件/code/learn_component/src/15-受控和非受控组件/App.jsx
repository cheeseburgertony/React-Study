import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: 'tony'
    }
  }

  inputChange(e) {
    // console.log(e.target.value);
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div>
        {/* 受控组件 value和state中的数据有进行绑定 (并且有相对应得onChange事件对输入内容进行处理才能正常使用) */}
        <input type="text" value={this.state.username} onChange={e => this.inputChange(e)} />

        {/* 非受控组件 value没有和state中的数据进行绑定 */}
        <input type="text" />
        <h2>{this.state.username}</h2>
      </div>
    )
  }
}

export default App