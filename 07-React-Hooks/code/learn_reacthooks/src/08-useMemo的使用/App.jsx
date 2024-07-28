import React, { memo, useMemo, useState } from 'react'

const Home = memo((props) => {
  console.log('Home被渲染了');
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
})

const calTotal = (num) => {
  console.log('calTotal函数被调用');
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 直接写的话这个函数在组件每次重新渲染的时候都会被重新调用(即使一致都是计算的结果都是相同的)
  // const result = calTotal(100)

  // useMemo进行优化，useMemo中回调函数返回的值作为优化后的值
  // 1.不依赖任何值，只进行一次计算(使用如固定参数的计算)
  const result = useMemo(() => calTotal(100), [])

  // 2.依赖count，count改变时再进行重新计算
  // const result = useMemo(() => calTotal(count), [count])

  // 3.useMemo和useCallback的对比
  // useMemo返回的是它回调函数中返回的值
  // useCallback返回的直接就是它里面的回调函数
  // const fn = () => { }
  // const increment = useCallback(fn, [])
  // const increment2 = useMemo(() => fn, [])

  // 4.使用useMemo对子组件渲染进行优化
  // 如果对子组件传递的是一个普通的值类型的话，无论有没有使用useMemo都不会进行重新渲染(普通值类型可以不用useMemo做性能优化)
  // 对子组件传递相同内容的对象是，使用useMemo进行性能优化
  // 直接传递一个对象，父组件修改count时，重新渲染，子组件也会重新渲染
  // const info = { name: 'tony', age: 18 }
  // 进行优化
  const info = useMemo(() => ({ name: 'tony', age: 18 }), [])


  return (
    <div>
      <h2>计算结果:{result}</h2>
      <h2>计数器:{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <Home result={result} info={info} />
    </div>
  )
})

export default App