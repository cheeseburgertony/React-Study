import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(100)

  // Effect会在渲染内容更新到DOM上后执行，不会阻塞DOM的更新
  useEffect(() => {
    // 在内容更新到DOM上执行，所以会先渲染0再渲染一个随机数，所以会导致闪屏的现象
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