import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(200)
  useEffect(() => {
    // 传入的回调函数会在组件被渲染完成后自动执行
    // 用于执行网络请求/DOM操作(这里是在修改标题)/事件监听
    document.title = count
  })

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App