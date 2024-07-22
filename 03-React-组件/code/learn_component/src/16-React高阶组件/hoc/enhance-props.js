import { PureComponent } from "react";

const ehanceUserInfo = (OriginComponent) => {
  class NewComponent extends PureComponent {
    constructor() {
      super()
      this.state = {
        userInfo: {
          name: 'tony',
          age: 18
        }
      }
    }
    render() {
      // 对原组件进行增强,传递userInfo数据到props
      // 增强后的组件传递数据,会在该组件中的props取到,取出props然后进行传递
      return (<OriginComponent {...this.props} {...this.state.userInfo} />)
    }
  }

  return NewComponent
}

export default ehanceUserInfo