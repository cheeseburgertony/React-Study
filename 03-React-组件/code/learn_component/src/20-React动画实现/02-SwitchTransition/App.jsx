import React, { PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: true
    }
  }

  render() {
    const { isLogin } = this.state
    return (
      <div>
        {/* mode='out-in' 表示先移出再移入 */}
        {/* 其他属性需要在CSSTransition中进行设置 */}
        {/* 用于两个组件的切换动画 */}
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={isLogin ? 'exit' : 'login'}
            timeout={1000}
            classNames='login'
          >
            <button onClick={e => this.setState({ isLogin: !isLogin })}>
              {isLogin ? '退出' : '登录'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

export default App