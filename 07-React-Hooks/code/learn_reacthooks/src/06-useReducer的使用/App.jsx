import React, { memo, useReducer, useState } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
    case 'add_num':
      return { ...state, counter: state.counter + action.num }
    case 'sub_num':
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}


const App = memo(() => {
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  return (
    <div>
      {/* <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
      <button onClick={e => setCounter(counter + 5)}>+5</button>
      <button onClick={e => setCounter(counter - 5)}>-5</button>
      <button onClick={e => setCounter(counter + 100)}>+100</button> */}

      <h2>当前计数：{state.counter}</h2>
      <button onClick={e => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={e => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={e => dispatch({ type: 'add_num', num: 5 })}>+5</button>
      <button onClick={e => dispatch({ type: 'sub_num', num: 5 })}>-5</button>
      <button onClick={e => dispatch({ type: 'add_num', num: 100 })}>+100</button>
    </div>
  )
})

export default App