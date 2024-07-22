import { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export class Modal extends PureComponent {
  render() {
    // 返回调用组件处传来的children,将其渲染到id为modal的位置上
    return createPortal(this.props.children, document.querySelector('#modal'))
  }
}

export default Modal