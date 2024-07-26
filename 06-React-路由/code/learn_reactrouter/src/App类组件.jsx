import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import Category from './pages/Category'
import Order from './pages/Order'
// import './style.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          header
          <div className="nav">
            {/* <NavLink to='/home' style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>首页</NavLink>
          <NavLink to='/about' style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>关于</NavLink> */}

            {/* <NavLink to='/home' className={({ isActive }) => isActive ? 'link_active' : ''}>首页</NavLink>
          <NavLink to='about' className={({ isActive }) => isActive ? 'link_active' : ''}>关于</NavLink> */}

            <Link to='/home'>首页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/login'>登录</Link>
            <button>分类</button>
            <span>订单</span>
          </div>
          <hr />
        </div>

        <div className="content">
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />}>
              <Route path='/home' element={<Navigate to='/home/recommend' />} />
              <Route path='/home/recommend' element={<HomeRecommend />} />
              <Route path='/home/ranking' element={<HomeRanking />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/category' element={<Category />} />
            <Route path='/order' element={<Order />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <div className="footer">
          <hr />
          footer
        </div>
      </div>
    )
  }
}

export default App