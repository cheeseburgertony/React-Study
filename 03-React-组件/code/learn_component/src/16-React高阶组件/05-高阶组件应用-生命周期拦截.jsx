import React, { PureComponent } from 'react'
import Detail from './pages/Detail'

export class App extends PureComponent {

  // // 监测组件渲染时间
  // componentWillMount() {
  //   this.startTime = new Date().getTime()
  // }

  // componentDidMount() {
  //   this.endTime = new Date().getTime()
  //   const interval = this.endTime - this.startTime
  //   console.log(`当前页面渲染花费了${interval}ms`)
  // }

  render() {

    return (
      <div>
        <Detail />
      </div>
    )
  }
}

export default App