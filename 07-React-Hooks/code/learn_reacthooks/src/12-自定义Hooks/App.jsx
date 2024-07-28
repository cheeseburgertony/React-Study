import React, { memo } from 'react'
import { useLocalStorage } from './hooks'

const App = memo(() => {
  const [token, setToken] = useLocalStorage('token')
  const [avatarURL, setAvatarURL] = useLocalStorage('avatarURL')

  return (
    <div className='app'>
      <h1>App:{token}</h1>
      <button onClick={e => setToken('tony')}>设置token</button>
      <h1>avatarURL:{avatarURL}</h1>
      <button onClick={e => setAvatarURL('https://www.cheeseburgertony.cn/avatar.png')}>设置avatarURL</button>
    </div>
  )
})

export default App