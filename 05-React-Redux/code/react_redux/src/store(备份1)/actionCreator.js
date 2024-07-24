import axios from 'axios'
import * as actionType from './constants'

export const addNumAction = num => ({ type: actionType.ADD_NUM, num })

export const subNumAction = num => ({ type: actionType.SUB_NUM, num })

export const changeBannersAction = banners => ({ type: actionType.CHANGE_BANNERS, banners })

export const changeRecommendsAction = recommends => ({ type: actionType.CHANGE_RECOMMENDS, recommends })

export const fetchHomeMultidataAction = () => {
  // 如果是一个普通的action，那么我们这里只需要返回一个action对象
  // 但是对象中是不能直接从服务器请求到异步数据
  // 使用这里需要返回一个函数，在函数中进行异步操作获取到数据后然后进行派发action对象
  // 但是如果返回的是一个函数，redux默认是不支持的，所以需要对redux进行中间件增强，添加个thunk
  // 返回的函数默认有两个参数 1.dispatch  2.getState
  return (dispatch, getState) => {
    // 在函数中进行异步操作，发送网络请求
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      // 获取到数据后再使用dispatch进行action对象的派发，将数据存储到store中
      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
    })
  }
}