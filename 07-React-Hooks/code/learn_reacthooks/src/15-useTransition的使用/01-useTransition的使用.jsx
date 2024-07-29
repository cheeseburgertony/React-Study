import React, { memo, useState, useTransition } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [names, setNames] = useState(namesArray)
  const [pending, startTransition] = useTransition()

  const inputHandle = (e) => {
    // 使用useTransition中的startTransition函数，在这个函数的回调函数中写入要执行的操作
    // 可以将这个操作的优先级降低，等到其他操作执行完再执行这个操作
    startTransition(() => {
      const newNames = namesArray.filter(item => item.name.includes(e.target.value))
      setNames(newNames)
    })
  }


  return (
    <div>
      <input type="text" onInput={e => inputHandle(e)} />
      <h2>用户名列表：{pending && <span>Data Loading...</span>}</h2>
      <ul>
        {names.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
})

export default App