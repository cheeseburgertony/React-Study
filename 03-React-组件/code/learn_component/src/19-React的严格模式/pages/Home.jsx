import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  // 严格模式下的检测
  // 1.识别到不安全的生命周期(已经过时的生命周期)
  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount');
  // }

  // 2.使用过时的ref API
  // componentDidMount() {
  //   console.log(this.refs.title);
  // }

  // 3.检测意外的副作用
  // 组件的constructor会被调用两次,生命周期会被调用两次,会渲染两次
  // 这是在严格模式下故意进行的操作,让你来查看在这里写的一些逻辑代码被调用两次时,是否会产生一些副作用
  componentDidMount() {
    console.log('Home componentDidMount');
  }

  // 4.使用废弃的findDomNode方法

  // 5.检测过时的context API
  // 早期Context时通过static属性声明Context对象属性,通过getChildContext返回Context对象等方式来使用Context的

  render() {
    console.log('Home render');
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

export default Home