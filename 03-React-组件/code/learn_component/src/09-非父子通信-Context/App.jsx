import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'
import Profile from './Profile'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: {
        name: 'tom',
        age: 10
      }
    }
  }

  render() {
    const { info } = this.state
    return (
      <div>
        App
        {/* 另外补充，Spread Attributes如果已经存在这样一个对象里面的属性和需要传递属性一致，可以直接使用{...对象名}进行传递 */}
        {/* 例如这里info中就包含了name和age属性，所以使用{...info}后就相对于是 name='tom' age={10} */}
        {/* 1.给Home传递数据 */}
        {/* <Home name='tony' age={18} />
        <Home {...info} /> */}

        {/* 2.普通的Home 给后代组件传递数据 */}
        {/* 2.通过ThemeContext中的Provider中的value属性为后代提供数据 */}
        <UserContext.Provider value={{ nickname: 'tony', age: 18 }}>
          <ThemeContext.Provider value={{ color: 'red', fontSize: '18px' }}>
            <Home {...info} />
          </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile />
      </div>
    )
  }
}

export default App