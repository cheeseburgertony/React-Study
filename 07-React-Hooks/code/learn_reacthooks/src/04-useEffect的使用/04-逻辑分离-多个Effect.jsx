import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 负责告知react，在执行往当前组件渲染后要执行的副作用代码
  useEffect(() => {
    // 1.修改title
    console.log('修改title')
  })

  // 一个函数式组件中，可以存在多个useEffect，且执行顺序会和这里effect声明的顺序一致
  // 这样有利于将不同的逻辑放入不同的useEffect中
  useEffect(() => {
    // 2.订阅redux中的数据变化
    console.log('订阅redux中的数据变化');

    return () => {
      // 取消订阅redux中的数据变化
      // console.log('取消订阅redux中的数据变化');
    }
  })

  useEffect(() => {
    // 3.监听事件总线上的事件
    console.log('监听事件总线上的事件');

    return () => {
      // 取消监听事件总线上的事件
      // console.log('取消监听事件总线上的事件');
    }
  })

  return (
    <div>
      <button onClick={e => setCount(count + 1)}>+1（{count}）</button>
    </div>
  )
})

export default App