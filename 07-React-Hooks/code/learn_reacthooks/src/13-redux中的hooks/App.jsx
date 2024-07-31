import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addNum, changeMessage, subNum } from './store/modules/counter'

// memo高阶组件包裹起来的组件有对应额特点：只有props(或者自己本身的状态state)发生改变时才会重新渲染
const Home = memo(() => {
  // 如果使用useSelector并且在第一个参数，回调函数中返回一个对象，默认是监听store里相对应的模块的整个state
  // 只要整个state中有一个状态发生改变，其他用到这个state的组件都会重新渲染
  // 这是需要用到第二个参数进行来进行浅比较来决定是否重新渲染
  // const { message } = useSelector((state) => ({
  //   message: state.counter.message
  // }), shallowEqual)

  // 发现只要在useSelector中直接写成这样的形式，直接返回对应的state中的数据，默认只会监听该数据是否发生变化而进行重新渲染
  // const message = useSelector((state) => state.counter.message)
  // 如果不是以对象的形式返回这样写也是会监听state中其他数据变化，这个组件也会被重新渲染
  // const { message } = useSelector(state => state.counter, shallowEqual)
  // 所以要么写成返回一个对象的形式加上shallowEqual，要么直接返回值在state中对应的数据
  const { message } = useSelector(state => ({ message: state.counter.message }), shallowEqual)

  const dispatch = useDispatch()

  const changeMessageHandle = () => {
    dispatch(changeMessage('Hello React'))
  }

  console.log('Home render');

  return (
    <div>
      <h1>Home:{message}</h1>
      <button onClick={e => changeMessageHandle()}>修改文本</button>
    </div>
  )
})

const App = memo((props) => {
  // 1.使用useSelector将redux中store的数据映射到组件中
  // const { count } = useSelector((state) => ({
  //   count: state.counter.count
  // }), shallowEqual)

  // const { count } = useSelector(state => state.counter)

  const count = useSelector(state => state.counter.count)

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch()
  const changeNum = (num, isAdd = true) => {
    if (isAdd) {
      dispatch(addNum(num))
    } else {
      dispatch(subNum(num))
    }
  }

  console.log('App render');
  return (
    <div>
      <h2>当前读数：{count}</h2>
      <button onClick={e => changeNum(1, true)}>+1</button>
      <button onClick={e => changeNum(1, false)}>-1</button>
      <button onClick={e => changeNum(5, true)}>+5</button>
      <button onClick={e => changeNum(5, false)}>-5</button>
      <Home />
    </div>
  )
})


export default App