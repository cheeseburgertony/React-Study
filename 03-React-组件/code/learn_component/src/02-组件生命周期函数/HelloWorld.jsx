import React from "react";

class HelloWorld extends React.Component {
  // 1.先执行构造方法:constructor
  constructor() {
    console.log('HelloWorld constructor');
    super()
    this.state = {
      msg: 'Hello World'
    }
  }

  changeText() {
    this.setState({ msg: 'Hello React' })
  }

  // 2.再执行render函数
  render() {
    const { msg } = this.state

    console.log('HelloWorld render');
    return (
      <div>
        <h1>{msg}</h1>
        <p>{msg}</p>
        <button onClick={() => this.changeText()}>修改文本</button>
      </div>
    )
  }

  // 3.组件被渲染到DOM:被挂载到DOM  componentDidMount
  componentDidMount() {
    console.log('HelloWorld componentDidMount');
  }

  // 4.组件的DOM更新完成:DOM发生更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('HelloWorld componentDidUpdate');
    console.log(prevProps, prevState, snapshot);
  }

  // 5.组件从DOM中被卸载掉:  从DOM中移除掉
  componentWillUnmount() {
    console.log('HelloWorld componentWillUnmount');
  }

  // 不常用的生命周期补充
  // 更新后是否要重新调用render渲染
  shouldComponentUpdate() {
    return true
  }

  // 再更新前产生一个快照通过return记录更新前的数据 在componentDidUpdate通过形参获取
  getSnapshotBeforeUpdate() {
    return {
      scroll: 1000
    }
  }
}

export default HelloWorld