import React, { PureComponent } from 'react'
import { AppWrap, SectionWrap } from './style'
import Home from './Home'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: 'blue',
      size: 18
    }
  }

  render() {
    const { color, size } = this.state
    return (
      <AppWrap>
        <SectionWrap color={color} size={size}>
          <h2 className='title'>我是标题</h2>
          <p className='content'>我是内容</p>
          <button onClick={e => this.setState({ color: 'pink' })}>修改颜色</button>
        </SectionWrap>
        <Home />

        <div className="footer">
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrap>
    )
  }
}

export default App