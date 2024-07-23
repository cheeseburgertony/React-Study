const store = require("./store");

// 订阅store，当store中的数据发生变化时自动触发
// 执行这个函数会产生一个函数，执行这个返回的函数可以取消订阅
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化：', store.getState());
})

// 修改store中的数据，定义一个action，通过dispatch派发一个action对象来进行修改
store.dispatch({ type: 'change_name', name: 'jenny' })

store.dispatch({ type: 'change_name', name: 'tom' })

// 执行取消订阅
unsubscribe()

// 修改counter
store.dispatch({ type: 'add_counter', num: 10 })