import React, { createRef, PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
    this.sectionRef = createRef()
  }

  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={e => this.setState({ isShow: !isShow })}>切换</button>
        {/* 使用CSSTransition对要进行动画效果的内容进行包裹 */}
        {/* 只需要将切换是否显示的属性绑定在CSSTransition上,无需另外额外写逻辑中断 */}
        {/* 添加类名,针对这个类型写CSS属性来控制动画效果 */}
        {/* 像react-transition-group这样的库实现上是在协助添加和删除动画类,不是直接实现动画 */}
        {/* in:触发进入或者退出状态 */}
        {/* timeout:决定什么时候移除-enter -enter-active或者-exit -exit-active 挂上-enter-done或者-exit-done*/}
        {/* 如果想要在页面刷新的时候第一次出现的时候执行动画 加上appear属性并且配合 -appear和-appear-active */}
        {/* unmountOnExit:退出后卸载组件 */}
        <CSSTransition
          nodeRef={this.sectionRef}
          in={isShow}
          classNames='tony'
          unmountOnExit={true}
          timeout={2000}
          appear
          onEnter={e => console.log('开始进入动画')}
          onEntering={e => console.log('执行进入动画')}
          onEntered={e => console.log('进入动画结束')}
          onExit={e => console.log('开始离开动画')}
          onExiting={e => console.log('执行离开动画')}
          onExited={e => console.log('离开结束')}
        >
          <div ref={this.sectionRef}>
            <h2>我是标题</h2>
            <p>我是内容</p>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default App