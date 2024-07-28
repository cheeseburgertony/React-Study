import React, { memo } from 'react'
import { connect } from 'react-redux'
import { addNum, subNum } from './store/modules/counter'

const App = memo((props) => {
  const { count, addNumHandle, subNumHandle } = props

  const changeNum = (num, isAdd = true) => {
    if (isAdd) {
      addNumHandle(num)
    } else {
      subNumHandle(num)
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

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  addNumHandle: num => dispatch(addNum(num)),
  subNumHandle: num => dispatch(subNum(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)