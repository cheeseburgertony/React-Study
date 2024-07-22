import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(e) {
    // 通过计算属性的方式根据e的name对不同state进行复制
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    // 1.阻止默认行为
    e.preventDefault()
    // 2.获取到所有的表单数据，对数据进行组建
    console.log('获取所有的输入内容');
    console.log(this.state.username, this.state.password);

    // 3.以网络请求的方式，将数据传递给服务器(ajax/fetch/axios)
  }
  render() {
    const { username, password } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          {/* 用户名和密码 */}
          <label htmlFor="username">
            姓名:<input type="text" id='username' name='username' value={username} onChange={e => this.handleChange(e)} />
          </label>
          <label htmlFor="password">
            密码:<input type="password" id='password' name='password' value={password} onChange={e => this.handleChange(e)} />
          </label>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
}

export default App