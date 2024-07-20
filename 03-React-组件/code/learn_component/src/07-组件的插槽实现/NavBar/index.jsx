import React, { Component } from 'react'
import './style.css'

export class NavBar extends Component {
  render() {
    const { children } = this.props

    // 如果有多个子元素的则children为数组
    // 如果只有一个子元素则children为ReactElement
    // 可以对props类型进行判断来限制传入的个数
    return (
      <div className='nav-bar'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default NavBar