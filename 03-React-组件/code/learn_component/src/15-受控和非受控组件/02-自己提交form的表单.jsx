import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: 'tony'
    }
  }

  handleChange(e) {
    this.setState({ username: e.target.value })
  }

  handleSubmit(e) {
    // 1.阻止默认行为
    e.preventDefault()
    // 2.获取到所有的表单数据，对数据进行组建
    console.log('获取所有的输入内容');
    console.log(this.state.username);

    // 3.以网络请求的方式，将数据传递给服务器(ajax/fetch/axios)
  }
  render() {
    const { username } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            姓名:<input type="text" id='username' value={username} onChange={(e) => this.handleChange(e)} />
          </label>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
}

export default App