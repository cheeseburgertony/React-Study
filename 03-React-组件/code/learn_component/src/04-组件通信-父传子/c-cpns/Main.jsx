import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import axios from 'axios'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      bannerList: [],
      productList: []
    }
  }

  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      this.setState({
        bannerList: res.data.data.banner.list,
        productList: res.data.data.recommend.list
      })
    })
  }

  render() {
    const { bannerList, productList } = this.state
    return (
      <div>
        Main
        <MainBanner bannerList={bannerList} title='轮播图' />
        <MainBanner />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main