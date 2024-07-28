import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNum, subNum } from './store/modules/counter'

const App = memo((props) => {
  // 1.使用useSelector将redux中store的数据映射到组件中
  // const { count } = useSelector((state) => ({
  //   count: state.counter.count
  // }))

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

  return (
    <div>
      <h2>当前读数：{count}</h2>
      <button onClick={e => changeNum(1, true)}>+1</button>
      <button onClick={e => changeNum(1, false)}>-1</button>
      <button onClick={e => changeNum(5, true)}>+5</button>
      <button onClick={e => changeNum(5, false)}>-5</button>
    </div>
  )
})


export default App