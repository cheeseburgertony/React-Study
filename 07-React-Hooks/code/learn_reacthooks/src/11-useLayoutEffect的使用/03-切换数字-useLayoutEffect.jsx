import React, { memo, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(100)

  // useLayoutEffect会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新
  useLayoutEffect(() => {
    // 在内容更新到DOM之前上执行，直接进行判断然后修改后直接重新渲染，不会出现闪屏
    if (count === 0) {
      setCount(Math.random() + 99)
    }
  }, [count])

  console.log('render');

  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={e => setCount(0)}>设置为0</button>
    </div>
  )
})

export default App