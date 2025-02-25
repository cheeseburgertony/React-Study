import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { withRouter } from '../hoc'

export class Home extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router
    navigate(path)
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to='/home/recommend'>歌曲</Link>
        <Link to='/home/ranking'>排行榜</Link>
        <button onClick={e => this.navigateTo('/home/songmenu')}>歌单</button>
        <Outlet />
      </div>
    )
  }
}

export default withRouter(Home)