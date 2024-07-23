import React, { PureComponent } from 'react'
// import './App.css'
// 使用CSS_Modules的写法 防止样式出现冲突
import appModule from './App.module.css'
import Home from './Home/Home'
import Profile from './Profile/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 使用CSS_Modules确实解决了局部作用域的问题  css文件要以.module.css结尾 */}
        {/* 缺点
              1.引用的类名，不能使用连接符(例如：.home-title)，这样在JS中不识别
              2.所有的className都必须使用{style.clssName}的形式来编写，例如下面的{appModule.title}
              3.不方便动态来修改某些样式，依然需要使用内联样式的方式来动态修改某些样式
        */}
        <h2 className={appModule.title}>我是标题</h2>
        <p className={appModule.content}>我是内容</p>
        <Home />
        <Profile />
      </div>
    )
  }
}

export default App