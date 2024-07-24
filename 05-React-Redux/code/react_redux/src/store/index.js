import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
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
  user:userReducer
})

// combineReducers实现原理(了解)
// const reducer = (state = {}, action) => {
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action)
//   }
// }

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store