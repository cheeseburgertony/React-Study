import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('Hello World')

  // 如果useEffect第二个参数什么都不写的话则表示只要组件重新渲染就会执行useEffect中的副作用
  // 如果在第二个参数中，指定了受那个状态变化而影响，则会在该状态改变时执行useEffect中的副作用
  useEffect(() => {
    console.log('修改title')
  }, [count])

  useEffect(() => {
    console.log('订阅redux中的数据变化');

    // 当第二个参数是个空数组时，表示不受其他状态变化的影响，只会在组件第一次渲染时执行一次
    // 并且清除函数只会在组件卸载时执行一次
    return () => {
      console.log('取消订阅redux中的数据变化');
    }
  }, [])

  useEffect(() => {

    return () => {
      console.log('取消监听事件总线上的事件');
    }
  }, [])

  useEffect(() => {
    console.log('发送网络请求');

    return () => {
    }
  }, [])

  return (
    <div>
      <button onClick={e => setCount(count + 1)}>+1（{count}）</button>
      <button onClick={e => setMsg('Hello React')}>+1（{msg}）</button>
    </div>
  )
})

export default App