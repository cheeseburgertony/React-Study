import React from 'react'
import ThemeContext from './context/theme-context'

export default function HomeBanner() {
  return (
    <div>
      {/* 函数式组件中使用context共享数据 */}
      {/* 只需要在外层加一层ThemeContext.Consumer标签，里面使用一个回调函数，参数是共享的数据，返回要显示的内容 */}
      <ThemeContext.Consumer>
        {value => <h2>HomeBanner：{value.color}</h2>}
      </ThemeContext.Consumer>
    </div>
  )
}
