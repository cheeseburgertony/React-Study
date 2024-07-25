// connect的参数：
// 参数一：函数
// 参数二：函数

import { PureComponent } from "react"
import { StoreContext } from "./StoreContext"
// import store from "../store"



// 返回值：函数 => 高阶组件
export const connect = (mapStateToProps, mapDispatchToProps) => {
  // 返回一个高阶组件=>实际上也是一个函数
  return (OriginComponent) => {
    class NewComponent extends PureComponent {
      constructor(props, context) {
        super(props)
        this.state = mapStateToProps(context.getState())
      }
      componentDidMount() {
        // 订阅store里的数据的改变，从而对数据进行修改，重新渲染页面
        this.unsubscribe = this.context.subscribe(() => {
          // this.forceUpdate()
          this.setState(mapStateToProps(this.context.getState()))
        })
      }

      componentWillUnmount() {
        // 组件卸载时停止监听
        this.unsubscribe()
      }

      render() {
        const stateObj = mapStateToProps(this.context.getState())
        const dispatchObj = mapDispatchToProps(this.context.dispatch)

        return (<OriginComponent {...this.props} {...stateObj} {...dispatchObj} />)
      }
    }

    NewComponent.contextType = StoreContext

    return NewComponent
  }
}