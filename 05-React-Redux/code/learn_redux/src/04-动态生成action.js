/**
 * redux代码优化：
 * 1.将派发的action生成过程放到一个actionCreators函数中
 * 2.将定义的所有actionCreators的函数，放到一个独立的文件中：actionCreators.js
 * 3.actionCreators和reducer函数中使用字符串常量是一致的，所以将常量抽取到一个独立constants.js的文件中
 * 4.将reducer和默认值(initialState)放到一个独立的reducer.js文件中，而不是在index.js
 */


const store = require("./store");
const { changeNameAction, addCounterAction } = require("./store/actioncreators");

// 订阅store，当store中的数据发生变化时自动触发
// 执行这个函数会产生一个函数，执行这个返回的函数可以取消订阅
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化：', store.getState());
})

// // actionCreators：帮助我们创建action
// const changeNameAction = (name) => ({ type: 'change_name', name })
// const addCounterAction = (num) => ({ type: 'add_counter', num })

// 修改store中的数据，定义一个action，通过dispatch派发一个action对象来进行修改
store.dispatch(changeNameAction('jenny'))
store.dispatch(changeNameAction('tom'))

// 执行取消订阅
// unsubscribe()

// 修改counter
store.dispatch(addCounterAction(10))