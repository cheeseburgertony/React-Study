import React, { memo } from 'react'
import { useUserToken } from './hooks'


const Home = memo(() => {
  const [user, token] = useUserToken()
  return (
    <h1>Home-{user.name}-{user.age}-token:{token}</h1>
  )
})

const About = memo(() => {
  const [user, token] = useUserToken()
  return (
    <h1>About-{user.name}-{user.age}-token:{token}</h1>
  )
})

const App = memo(() => {
  return (
    <div>
      <h1>App</h1>
      <Home />
      <About />
    </div>
  )
})

export default App