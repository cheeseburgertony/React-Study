import React from "react";
import HelloWorld from "./HelloWorld";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: 'Hello',
      isShow: true
    }
  }

  switchShow(){
    this.setState({isShow: !this.state.isShow})
  }

  render() {
    const { isShow } = this.state
    return (
      <div>
        Hello
        <button onClick={() => this.switchShow()}>切换显示组件</button>
        {isShow && <HelloWorld />}
      </div>
    )
  }
}

export default App;
