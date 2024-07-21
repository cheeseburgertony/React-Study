import React, { Component } from 'react'
import ThemeContext from './context/theme-context'

export class Profile extends Component {
  render() {
    // 组件不再context的Provider内，使用默认数据
    console.log(this.context);
    return (
      <div>
        Profile:{this.context.color}
      </div>
    )
  }
}

Profile.contextType = ThemeContext

export default Profile