import React, { Component } from 'react'

export class MainProductList extends Component {
  // 如果不同对自身独有的状态进行管理，可以不用使用constructor，react默认会自动进行super(props)
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { productList } = this.props

    return (
      <div>
        <h2>MainProductList</h2>
        商品列表
        <ul>
          {productList.map(item => <li key={item.acm}>{item.title}</li>)}
        </ul>
      </div>
    )
  }
}



export default MainProductList