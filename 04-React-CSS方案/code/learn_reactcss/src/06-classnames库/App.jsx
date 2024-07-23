import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isbbb: false,
      isccc: true
    }
  }

  render() {
    const { isbbb, isccc } = this.state

    // 抽取出来根据条件写成数组最后在通过join拼接成字符串
    const classList = ['aaa']
    if (isbbb) classList.push('bbb')
    if (isccc) classList.push('ccc')
    const className = classList.join(' ')

    return (
      <div>
        {/* 没有classnames库之前的写法 */}
        <h2 className={`aaa ${isbbb ? 'bbb' : ''} ${isccc ? 'ccc' : ''}`}>我是标题1</h2>
        <h2 className={className}>我是标题2</h2>
        {/* 使用classnames库之后的写法 */}
        <h2 className={classNames('aaa', { bbb: isbbb, ccc: isccc })}>我是标题3</h2>
        <h2 className={classNames(['aaa', { bbb: isbbb, ccc: isccc }])}>我是标题4</h2>
      </div>
    )
  }
}

export default App