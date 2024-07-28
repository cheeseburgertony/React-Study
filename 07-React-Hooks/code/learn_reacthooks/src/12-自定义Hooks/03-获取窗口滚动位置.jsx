import React, { memo } from 'react'
import './style.css'
import { useScrollPosition } from './hooks'

const Home = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()
  return (
    <h1>Home-{scrollX}-{scrollY}</h1>
  )
})

const About = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()
  return (
    <h1>About-{scrollX}-{scrollY}</h1>
  )
})

const App = memo(() => {
  return (
    <div className='app'>
      <h1>App</h1>
      <Home />
      <About />
    </div>
  )
})

export default App