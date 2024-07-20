import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titles: ['流行', '新款', '精选'],
      tabIndex: 0
    }
  }
  handleTab(index) {
    this.setState({ tabIndex: index })
  }

  changeType(item) {
    if (item === '流行') {
      return <button>{item}</button>
    } else if (item === '新款') {
      return <h2>{item}</h2>
    } else if (item === '精选') {
      return <i>{item}</i>
    }
  }

  render() {
    const { titles, tabIndex } = this.state

    return (
      <div className='app'>
        <TabControl
          switchTab={(index) => this.handleTab(index)}
          titles={titles}
          // 写成函数的形式，组件在调  用时传递参数过着，这边进行接收然后再渲染
          // itemType={item => <button>{item}</button>}
          itemType={(item) => this.changeType(item)}
        />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App