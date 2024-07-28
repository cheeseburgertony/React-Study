import React, { memo, useCallback, useRef, useState } from 'react'

let obj = {}

const App = memo(() => {
  const [count, setCount] = useState(0)
  const nameRef = useRef()
  // 使用useRef生成的对象在整个生命周期中可以保持不变
  // 测试useRef生成的对象是否不变
  console.log(obj === nameRef);
  obj = nameRef

  // 通过useRef解决闭包陷阱
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(() => {
    // 之前直接这样写会导致闭包陷阱，这里由于是没有依赖的，不会重新声明函数，useCallback中的count获取的一直是第一次的count，也就是0，从而形成了闭包陷阱
    // setCount(count + 1)
    // 由于使用useRef生成的对象在整个生命周期中可以保持不变，使用可以使用将count保存在useRef生成的对象的current中，从而解决闭包陷阱
    setCount(countRef.current + 1)
  }, [])


  return (
    <div>
      <h2>Hello</h2>
      <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App