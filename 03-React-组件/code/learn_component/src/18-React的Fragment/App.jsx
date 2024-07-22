import React, { Fragment, PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      sections: [
        { title: '我是标题1', content: '我是内容1' },
        { title: '我是标题2', content: '我是内容2' },
        { title: '我是标题3', content: '我是内容3' },
        { title: '我是标题4', content: '我是内容4' },
      ]
    }
  }

  render() {
    const { sections } = this.state
    return (
      // 如果想要标签包裹元素,但又不希望DOM渲染该标签,可以使用Fragment标签包裹或者写他的语法糖(短语法)<></>
      <>
        <h2>我是标题</h2>
        <p>我是内容</p>
        <hr />

        {sections.map(item => {
          return (
            // 如果需要在Fragment中添加key,就不能写他的短语法,否则JSX无法进行解析
            <Fragment key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </Fragment>
          )
        })}
      </>

    )
  }
}

export default App