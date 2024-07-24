import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store/actionCreator'

export class Category extends PureComponent {

  componentDidMount() {
    // 直接调用进行异步操作的函数
    this.props.fetchHomeMultidata()
  }

  render() {
    return (
      <div>
        <h2>Category Page</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  // 将获取网络请求的操作全部整合到actionCreators中，使用整合后的的fetchHomeMultidataAction来进行派发一个函数(在函数中进行异步操作)
  // 这里dispatch派发的是一个action函数，一旦进行派发，里面这个函数就会执行
  fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction())
})

export default connect(null, mapDispatchToProps)(Category)