import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";
import { thunk } from "redux-thunk";

// 开启redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose

// 正常情况下 store.dispatch(object) 派发的是一个action对象
// 想要派发函数 store.dispatch(function)  需要对redux进行增强，添加thunk
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store