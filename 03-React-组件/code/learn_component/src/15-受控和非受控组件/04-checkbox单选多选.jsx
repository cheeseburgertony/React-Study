import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isChecked: false,
      hobbies: [
        { value: 'sing', text: '唱', isChecked: false },
        { value: 'dance', text: '跳', isChecked: false },
        { value: 'rap', text: 'rap', isChecked: false }
      ]
    }
  }

  handleChange(e) {
    // 通过计算属性的方式根据e的name对不同state进行复制
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckChange(e) {
    // console.log(e.target.checked);
    this.setState({ isChecked: e.target.checked })
  }

  handleChangeMoreCheck(e, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = e.target.checked
    this.setState({ hobbies })
  }

  handleSubmit(e) {
    // 1.阻止默认行为
    e.preventDefault()
    // 2.获取到所有的表单数据，对数据进行组建
    console.log('获取所有的输入内容');
    console.log(this.state.username, this.state.password);
    console.log('获取爱好', this.state.hobbies.filter(item => item.isChecked).map(item => item.value));

    // 3.以网络请求的方式，将数据传递给服务器(ajax/fetch/axios)
  }
  render() {
    const { username, password, isChecked, hobbies } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            {/* 1.用户名和密码 */}
            <label htmlFor="username">
              姓名:<input type="text" id='username' name='username' value={username} onChange={e => this.handleChange(e)} />
            </label>
            <label htmlFor="password">
              密码:<input type="password" id='password' name='password' value={password} onChange={e => this.handleChange(e)} />
            </label>
          </div>

          {/* 2.checkbox单选 */}
          <label htmlFor="agree">
            同意协议<input id='agree' type="checkbox" checked={isChecked} onChange={e => this.handleCheckChange(e)} />
          </label>
          {/* 3.checkbox多选 */}
          <div>
            爱好:
            {hobbies.map((item, index) => {
              return (
                <label key={item.value} htmlFor={item.value}>
                  <input type="checkbox" id={item.value} checked={item.isChecked} onChange={e => this.handleChangeMoreCheck(e, index)} />{item.text}
                </label>
              )
            })}
          </div>
          <div>
            <button type='submit'>提交</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App