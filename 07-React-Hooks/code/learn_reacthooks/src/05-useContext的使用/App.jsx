import React, { memo, useContext } from 'react'
import { ThemeContext, UserContext } from './context'

const App = memo(() => {
  // 使用Context
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return (
    <div>
      <h2>User: name:{user.name}-age:{user.age}</h2>
      <h2 style={{ color: theme.color, fontSize: theme.size }}>Theme</h2>
    </div>
  )
})

export default App