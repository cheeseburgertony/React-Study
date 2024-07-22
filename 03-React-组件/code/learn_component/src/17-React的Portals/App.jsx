import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h1>App H1</h1>
        {/* 直接调用createPortal将h2的内容渲染到id为tony的位置上 */}
        {/* createPorta(任何可以渲染的React子元素(一个元素,字符串或者fragment), 一个DOM元素) */}
        {createPortal(<h2>App H2</h2>, document.querySelector('#tony'))}

        <Modal>
          <h2>我是标题</h2>
          <p>我是内容</p>
        </Modal>
      </div>
    )
  }
}

export default App