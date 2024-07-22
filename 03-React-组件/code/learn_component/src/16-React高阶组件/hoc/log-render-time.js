import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
  // 直接return的话类名可以省略 相对于时个匿名类
  return class extends PureComponent {
    // 监测组件渲染时间
    componentWillMount() {
      this.startTime = new Date().getTime()
    }

    componentDidMount() {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.startTime
      // 可以通过OriginComponent.name过去组件的名字
      console.log(`当前${OriginComponent.name}页面渲染花费了${interval}ms`)
    }


    render() {
      return (<OriginComponent />)
    }
  }
}

export default logRenderTime