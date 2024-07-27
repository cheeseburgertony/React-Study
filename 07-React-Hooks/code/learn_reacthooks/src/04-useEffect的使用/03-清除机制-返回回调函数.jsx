import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 负责告知react，在执行往当前组件渲染后要执行的副作用代码
  useEffect(() => {
    // 监听事件
    console.log('模拟监听redux中数据变化，监听EventBus中的某一事件')

    // 返回值：回调函数 =>组件被重新渲染或者组件卸载的时候执行
    // 当组件被重新渲染时，先执行return返回出去的函数(清除函数)，再重新渲染组件，再执行useEffect中的副作用代码
    return () => {
      console.log('取消监听redux中数据变化，取消监听EventBus中的某一事件');
    }
  })

  return (
    <div>
      <button onClick={e => setCount(count + 1)}>+1（{count}）</button>
    </div>
  )
})

export default App