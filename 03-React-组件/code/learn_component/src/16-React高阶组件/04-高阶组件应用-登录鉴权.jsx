import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  login() {
    localStorage.setItem('token', 'token')
    // 进行强制刷新才能重新渲染页面  (或者使用setState重新渲染页面)
    this.forceUpdate()
  }

  render() {

    return (
      <div>
        App
        <Cart />
        <button onClick={e => this.login()}>登录</button>
      </div>
    )
  }
}

export default App