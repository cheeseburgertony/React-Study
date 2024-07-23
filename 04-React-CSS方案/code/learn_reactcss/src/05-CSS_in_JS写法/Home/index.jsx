import React, { PureComponent } from 'react'
import { HomeWrapper, YWButtonWrapper } from './style'

export class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="top">
          <h2 className='content'>
            BannerContent
          </h2>
        </div>
        <div className="bottom">
          <div className="header">商品列表</div>
          <ul className='list'>
            <li className='item'>商品列表1</li>
            <li className='item'>商品列表2</li>
            <li className='item'>商品列表3</li>
            <li className='item'>商品列表4</li>
          </ul>
        </div>
        <YWButtonWrapper>定制按钮</YWButtonWrapper>
      </HomeWrapper>
    )
  }
}

export default Home