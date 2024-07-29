import React, { memo, useDeferredValue, useState } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [names, setNames] = useState(namesArray)
  // useDeferredValue接收一个值(在这里是原来要展示的数据)，返回一个新副本，这个副本将在其他更紧急更新之后再进行执行(类似useTransition中的startTransition，降低优先级)
  // 这里由useDeferredValue返回的deferredNames在展示时优先级就会降低，等到其他重要操作执行后在展示这里的数据
  const deferredNames = useDeferredValue(names)

  const inputHandle = (e) => {
    const newNames = namesArray.filter(item => item.name.includes(e.target.value))
    setNames(newNames)
  }


  return (
    <div>
      <input type="text" onInput={e => inputHandle(e)} />
      <h2>用户名列表：</h2>
      <ul>
        {deferredNames.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
})

export default App