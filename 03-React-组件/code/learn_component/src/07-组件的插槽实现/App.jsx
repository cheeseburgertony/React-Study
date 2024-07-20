import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBarTwo from './NavBarTwo'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 1.使用children实现插槽 */}
        <NavBar>
          <button>按钮</button>
          <h2>标题</h2>
          <i>斜体</i>
        </NavBar>

        {/* 2.使用props实现插槽 */}
        <NavBarTwo
          leftSlot={<button>按钮2</button>}
          centerSlot={<h2>标题2</h2>}
          rightSlot={<i>斜体2</i>}
        />
      </div>
    )
  }
}

export default App