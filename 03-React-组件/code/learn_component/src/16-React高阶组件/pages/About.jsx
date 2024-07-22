import React, { PureComponent } from 'react'
import ehanceUserInfo from '../hoc/enhance-props'

export class About extends PureComponent {
  render() {
    return (
      <div>About-{this.props.name}-{this.props.age}</div>
    )
  }
}

// 在导出的时候对组件进行props增强
export default ehanceUserInfo(About)