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

export default thunk