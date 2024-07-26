import React, { memo } from 'react'
import CounterClass from './CounterClass'
import CounterHook from './CounterHook'

const App = memo(() => {
  return (
    <div>
      <h2>App</h2>
      <CounterClass />
      <CounterHook />
    </div>
  )
})

export default App