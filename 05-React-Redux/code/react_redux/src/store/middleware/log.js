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

export default log