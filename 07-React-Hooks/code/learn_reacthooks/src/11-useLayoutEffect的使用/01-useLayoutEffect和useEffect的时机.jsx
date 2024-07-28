import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // useLayoutEffect会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  })

  // useEffect会在渲染内容更新到DOM上后执行，不会阻塞DOM的更新
  useEffect(() => {
    console.log('useEffect');
  })

  console.log('render');

  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App