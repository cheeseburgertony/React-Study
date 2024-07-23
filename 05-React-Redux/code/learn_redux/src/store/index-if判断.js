const { createStore } = require("redux")

// 初始化的数据
const initState = {
  name: 'tony',
  age: 18,
  counter: 100
}

// 定义reducer函数 (纯函数)  返回初始数据
// 两个参数：
// 参数一：store中目前保存的state
// 参数二：本次需要更新的action(dispatch传入的action)
// 返回值：它的返回值会作为store之后存储的state
function reducer(state = initState, action) {
  // 有新数据进行更新的时候，返回一个新的state
  // 通过type来判断要对什么数据进行修改
  // 通过type来判断要对什么数据进行修改
  if (action.type === 'change_name') {
    return { ...state, name: action.name }
  } else if (action.type === 'add_counter') {
    return { ...state, counter: state.counter + action.num }
  }
  // 没有新数据更新，返回之前的state
  return state
}

// 通过reducer创建store
const store = createStore(reducer)

// 导出store
module.exports = store