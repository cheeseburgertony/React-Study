import { memo, useState } from "react";

// 在普通的函数中不能使用hooks
// 在自定义的hooks中，可以使用react提供的hooks：自定义hooks必须使用use开头
// const useFoo = () => {
//   const [message] = useState('Hello World')
//   return message
// }

export const CounterHook = memo(() => {
  // hook就是JavaScript函数，这个函数帮助你钩入(hook into)React State以及生命周期等特性
  // hook指的是类似于useState、useEffect这样的函数
  // hooks是对这一类函数的通称
  
  // 只能在函数最外层(顶层)调用Hook。不要在循环，条件判断或者子函数中调用
  const [counter, setCounter] = useState(0)
  const [name] = useState('tony')
  console.log(name);
  // const message = useFoo()

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
    </div>
  )
})

export default CounterHook