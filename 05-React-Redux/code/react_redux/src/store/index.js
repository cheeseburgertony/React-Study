import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import { thunk } from "redux-thunk";
import counterReducer from './counter'
import homeReducer from './home'
import userReducer from './user'

// 开启redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose

// 正常情况下 store.dispatch(object) 派发的是一个action对象
// 想要派发函数 store.dispatch(function)  需要对redux进行增强，添加thunk
// 将所有reducer进行整合，整合成对象的形式
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer
})

// combineReducers实现原理(了解)
// const reducer = (state = {}, action) => {
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action)
//   }
// }

const store = createStore(reducer)

// 对每次派发的dispatch进行拦截，进行日志打印(dispatch前打印action，dispatch后打印state)
const log = (store) => {
  // 保留之前的dispatch
  const next = store.dispatch
  // 创建修改后的dispatch，然后将新的dispatch赋值给之前默认的store.dispatch
  const logAndDispatch = (action) => {
    console.log('当前派发的action：', action);
    // 真正执行派发的代码，使用之前的dispatch进行派发
    next(action)
    console.log('派发之后的结果：', store.getState());
  }
  // 将修改之后的dispatch赋值给之前的dispatch，更换掉dispatch
  // monkey patch：猴补丁 => 篡改现有的代码，对整体的执行逻辑进行修改
  store.dispatch = logAndDispatch

  // 简洁写法
  // store.dispatch = (action) => {
  //   console.log('当前派发的action：', action);
  //   next(action)
  //   console.log('派发之后的结果：', store.getState());
  // }
}
log(store)

// redux-thunk实现
const thunk = (store) => {
  const next = store.dispatch
  // 函数=>执行 对象=>直接派发
  const dispatchThunk = (action) => {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  store.dispatch = dispatchThunk
}
thunk(store)

export default store