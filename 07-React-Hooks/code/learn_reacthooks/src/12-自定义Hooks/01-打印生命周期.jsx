import React, { memo, useEffect, useState } from 'react'

const useLogLife = (cname) => [
  useEffect(() => {
    console.log(cname, '组件被创建了');
    return () => {
      console.log(cname, '组件被卸载了');
    }
  }, [cname])
]

const Home = memo(() => {
  useLogLife('Home')
  return (
    <h1>Home</h1>
  )
})

const About = memo(() => {
  useLogLife('About')
  return (
    <h1>About</h1>
  )
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)
  useLogLife('app')
  return (
    <div>
      <h1>App</h1>
      <button onClick={e => setIsShow(!isShow)}>isShow</button>
      {isShow && <Home />}
      {isShow && <About />}
    </div>
  )
})

export default App