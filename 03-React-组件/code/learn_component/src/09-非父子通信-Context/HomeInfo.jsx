import React, { Component } from 'react'
import ThemeContext from './context/theme-context';
import UserContext from './context/user-context';

export class HomeInfo extends Component {
  render() {
    // 4.获取数据，并使用数据
    console.log(this.context);
    return (
      <div>
        HomeInfo
        <div>{this.context.color}</div>
        {/* 获取多个context共享的数据也可以使用 */}
        {<UserContext.Consumer>
          {value => <div>UserContext ThemeContext:{value.nickname}</div>}
        </UserContext.Consumer>}
      </div>
    )
  }
}

// 3.设置组件的contextType，设置context类型为某一个我们创建的context
HomeInfo.contextType = ThemeContext

export default HomeInfo