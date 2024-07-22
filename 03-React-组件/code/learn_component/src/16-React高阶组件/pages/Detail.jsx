import React, { PureComponent } from 'react'
import logRenderTime from '../hoc/log-render-time'

export class Detail extends PureComponent {
  render() {
    return (
      <div>
        <h2>Detail</h2>
        <ul>
          <li>数据列表1</li>
          <li>数据列表2</li>
          <li>数据列表3</li>
          <li>数据列表4</li>
          <li>数据列表5</li>
          <li>数据列表6</li>
          <li>数据列表7</li>
          <li>数据列表8</li>
          <li>数据列表9</li>
          <li>数据列表10</li>
        </ul>
      </div>
    )
  }
}

// 导出时使用高阶组件来对渲染时间进行计算
export default logRenderTime(Detail)