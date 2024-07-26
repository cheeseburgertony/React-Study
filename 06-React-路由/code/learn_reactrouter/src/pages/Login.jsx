import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }
  render() {
    const { isLogin } = this.state
    return (
      <div>
        <h2>Login</h2>
        {isLogin ? <Navigate to='/home' /> : <button onClick={e => this.setState({ isLogin: true })}>登录</button>}
      </div>
    )
  }
}

export default Login