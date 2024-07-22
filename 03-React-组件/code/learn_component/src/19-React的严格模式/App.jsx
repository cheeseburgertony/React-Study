import React, { PureComponent, StrictMode } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 给Home组件开启严格模式 */}
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    )
  }
}

export default App