import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  // 给props一个默认值
  // static defaultProps = {
  //   bannerList: [],
  //   title: '默认标题'
  // }

  constructor(props) {
    super(props)
    // 相对于执行了this.props = props 初始化了该组件中的props
    this.state = {}
  }


  render() {
    // console.log(this.props);
    const { bannerList, title } = this.props
    return (
      <div>
        <h2>MainBanner轮播图位置:{title}</h2>
        <ul>
          {bannerList.map(item => <li key={item.acm}>{item.title}</li>)}
        </ul>
      </div>
    )
  }
}

// 对props进行类型校验
MainBanner.propTypes = {
  bannerList: PropTypes.array,
  title: PropTypes.string
}

// 给props一个默认值
MainBanner.defaultProps = {
  bannerList: [],
  title: '默认标题'
}

export default MainBanner