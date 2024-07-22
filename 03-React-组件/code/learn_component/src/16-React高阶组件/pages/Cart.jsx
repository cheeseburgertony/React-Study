import React, { PureComponent } from 'react'
import loginAuth from '../hoc/login-auth'

export class Cart extends PureComponent {
  render() {
    return (
      <div>
        <h2>Cart</h2>
      </div>
    )
  }
}

// 在导出的时候使用高阶组件进行登录鉴权(有token才能访问,否则只能访问登录页面)
export default loginAuth(Cart)