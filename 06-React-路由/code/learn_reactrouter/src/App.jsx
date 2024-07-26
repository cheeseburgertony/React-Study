import React from 'react'
import { Link, useNavigate, useRoutes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Login from './pages/Login'
// import NotFound from './pages/NotFound'
// import HomeRecommend from './pages/HomeRecommend'
// import HomeRanking from './pages/HomeRanking'
// import Category from './pages/Category'
// import Order from './pages/Order'
// import SongMenu from './pages/SongMenu'
// import Detail from './pages/Detail'
// import User from './pages/User'
import routes from './router'

const App = (props) => {
  const navigate = useNavigate()
  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <div>
      <div className="header">
        header
        <div className="nav">
          <Link to='/home'>首页</Link>
          <Link to='/about'>关于</Link>
          <Link to='/login'>登录</Link>
          <Link to='/user?name=tony&age=18'>用户</Link>
          <button onClick={e => navigateTo('/category')}>分类</button>
          <span onClick={e => navigateTo('/order')}>订单</span>
        </div>
        <hr />
      </div>

      <div className="content">
        {/* <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />}>
            <Route path='/home' element={<Navigate to='/home/recommend' />} />
            <Route path='/home/recommend' element={<HomeRecommend />} />
            <Route path='/home/ranking' element={<HomeRanking />} />
            <Route path='/home/songmenu' element={<SongMenu />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/category' element={<Category />} />
          <Route path='/order' element={<Order />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/user' element={<User />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}

        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr />
        footer
      </div>
    </div>
  )

}

export default App