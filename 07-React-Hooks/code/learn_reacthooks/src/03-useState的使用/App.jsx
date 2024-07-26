import React, { memo, useState } from 'react'

const App = memo(() => {
  const [message, setMessage] = useState('Hello World')

  // useState的参数会作为初始化的值
  // 当调用返回的数组中的修改状态的函数时，函数会将修改的值进行保存，然后对组件进行重新渲染
  // 在重新渲染的时候函数组件又会遇到useState，这时就将之前修改保存的值对状态进行重新赋值(而不是和第一次一样使用useState的参数进行赋值)，完成状态的修改。
  const changeMessage = () => {
    setMessage('Hello React')
  }
  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App