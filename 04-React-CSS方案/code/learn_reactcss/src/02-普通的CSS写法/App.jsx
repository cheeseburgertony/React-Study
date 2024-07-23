import React, { PureComponent } from 'react'
import './App.css'
import Home from './Home/Home'
import Profile from './Profile/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 当引入CSS文件之后，普通的CSS都属于全局的CSS，样式之间会相互影响 相当于引入的所有的所写的CSS样式全都是全部样式，没有自己单独的作用域，都是作用在全局 */}
        {/* 这种编写方式最大的问题就是样式之间会相互层叠掉 */}
        <h2 className='title'>我是标题</h2>
        <p className='content'>我是内容</p>
        <Home />
        <Profile />
      </div>
    )
  }
}

export default App