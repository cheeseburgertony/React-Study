import React, { Component } from 'react'
import HomeInfo from './HomeInfo';
import HomeBanner from './HomeBanner';

export class Home extends Component {
  render() {
    const { name, age } = this.props
    return (
      <div>
        Home
        <div>{name}-{age}</div>
        <HomeInfo />
        <HomeBanner />
      </div>
    )
  }
}

export default Home