import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: 'Hello'
    }
  }

  render() {
    // const { msg } = this.state
    // render函数的返回值
    // 1.返回react元素:通过jsx编写的就会被编译成React.createElement,所以返回的是一个ReactElement
    // return (
    //   <div>{msg}</div>
    // )

    // 2.返回数组或者fragments(后续学习)
    // return [1,2,3]
    // return [
    //   <h1>Hello</h1>,
    //   <h2>Hello</h2>
    // ]

    // 3.返回Portals:可以渲染子节点到不同的DOM子树中

    // 4.返回字符串或数值类型:它们在DOM中会被渲染为文本节点
    // return 'hello'
    // return 123

    // 5.返回布尔类型或者null:说明都不渲染
    return true
  }
}

export default App;
