import React, { memo, useCallback, useRef, useState } from 'react'

const Home = memo((props) => {
  console.log('Home重新渲染');
  return (
    <div>
      <h2>Home</h2>
      <button onClick={props.increment}>increment+1</button>
    </div>
  )
})

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState('Hello World')

  // 每次重新渲染时这个函数都会被重新定义，无论是写成在这里的函数还是写成箭头函数都会被重新定义
  // const increment = () => [
  //   setCounter(counter + 1)
  // ]

  // 这样写的话使用useCallback返回的increment函数，当依赖(第二个参数，类似于useEffect)不变时不会被重新定义
  // 但是从useCallback传入的回调函数，在每次useCallback执行的时候又重新定义  (某种程度上实际上还是有函数需要重新定义，并没有真正做到性能优化)
  // 闭包陷阱：当回调函数中有用到外部变量时需要，将该外部变量作为依赖，保证下次使用的外部变量是最新状态

  // useCallback性能优化的点
  // 1.当需要将一个函数传递给子组件时，最好使用useCallback进行优化，将优化之后的函数传递给子组件

  // props中的属性发生修改时，组件本身就会被重新渲染
  // 所以使用useCallback将要传递给子组件的函数进行优化，当所执行的操作与此函数无关时，这个函数不会进行重新定义，props中的属性也不会发生修改，这样子组件就不会重新渲染，从而优化性能
  // const increment = useCallback(() => {
  //   setCounter(counter + 1)
  // }, [counter])

  // 进一步优化：当count发生改变时，也使用同一个函数
  // 做法一：将count依赖移除掉，缺点：会产生闭包陷阱(例如这里使用的count就会一直是第一次定义时的那个count)
  // 做法二：useRef，在组件多次渲染时，返回的是同一个值(无论多少次重新渲染使用useRef返回的值是同一个)
  const countRef = useRef()
  countRef.current = counter
  const increment = useCallback(() => {
    setCounter(countRef.current + 1)
  }, [])

  return (
    <div>
      <h2>计数：{counter}</h2>
      <button onClick={e => increment()}>+1</button>
      <h2>message:{message}</h2>
      <button onClick={e => setMessage(Math.random())}>修改文本</button>
      <Home increment={increment} />
    </div>
  )
})


// 闭包捕获的作用域变量是闭包中函数定义时的外边的变量
// 例如这里就是当我调用foo('tony')并且传入'tony',这时内部的bar函数会被定义,然后它取到的当前的变量就是我传入的'tony'
// 当调用foo('tom'),相同道理在bar定义时取到的变量为'tom'
const foo = (name) => {
  const bar = () => {
    console.log(name);
  }
  return bar
}

const bar = foo('tony')
bar() // tony
const bar2 = foo('tom')
bar2()  // tom
bar() // tony

export default App