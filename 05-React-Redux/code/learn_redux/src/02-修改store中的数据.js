const store = require("./store");


console.log(store.getState());

// 修改store中的数据，定义一个action，通过dispatch派发一个action对象来进行修改
const nameAction = { type: 'change_name', name: 'jenny' }
store.dispatch(nameAction)
console.log(store.getState());

const nameAction2 = { type: 'change_name', name: 'tom' }
store.dispatch(nameAction2)
console.log(store.getState());

// 修改counter
const counterAction = { type: 'add_counter', num: 10 }
store.dispatch(counterAction)
console.log(store.getState());