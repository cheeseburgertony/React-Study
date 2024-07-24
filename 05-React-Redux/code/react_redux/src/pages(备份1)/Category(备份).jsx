import axios from 'axios'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeBannersAction, changeRecommendsAction } from '../store/actionCreator'

export class Category extends PureComponent {

  componentDidMount() {
    // 发送请求获取数据，将获取到的数据存入到store
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      this.props.changeBanners(banners)
      this.props.changeRecommends(recommends)
    })
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
  changeBanners: banners => dispatch(changeBannersAction(banners)),
  changeRecommends: recommends => dispatch(changeRecommendsAction(recommends))
})

export default connect(null, mapDispatchToProps)(Category)