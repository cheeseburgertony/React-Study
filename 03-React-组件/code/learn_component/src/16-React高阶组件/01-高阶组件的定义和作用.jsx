import React, { PureComponent } from 'react'

// 高阶组件:参数为组件,返回值为新组件的函数 Higher-Order Components HOC

// 定义一个高阶组件
function hoc(Cpn) {
  // 定义一个类组件
  // 高阶组件,对原本直接渲染的组件进行一层拦截,进行对应操作后再返回出去
  class NewCpn extends PureComponent {
    render() {
      return (
        <div>
          <Cpn name="tony" />
        </div>
      )
    }
  }
  return NewCpn

  // 定义一个函数组件
  // const NewCpn2 = () => {
  //   return (
  //     <div>Hello</div>
  //   )
  // }
  // return NewCpn2

}

class Hello extends PureComponent {
  render() {
    return (
      <div>
        <h2>Hello World</h2>
      </div>
    )
  }
}

// 使用高阶组件
const HelloHoc = hoc(Hello)

export class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <HelloHoc />
      </div>
    )
  }
}

export default App