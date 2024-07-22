import React, { PureComponent } from 'react'
import ehanceUserInfo from './hoc/enhance-props'
import About from './pages/About'

// 通过高阶组件对组件的props进行增强 (让其props都有userInfo)
const Home = ehanceUserInfo((props) => {
  return (<h2>Home-{props.name}-{props.age}-{props.level}</h2>)
})

const Profile = ehanceUserInfo((props) => {
  return (<h2>Profile-{props.name}-{props.age}</h2>)
})

const HelloFriend = ehanceUserInfo((props) => {
  return (<h2>HelloFriend-{props.name}-{props.age}</h2>)
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        App
        {/* 数据增强后的组件传递数据,实际上是在往高阶组件中的修改后的组件中传递数据,需要在高阶组件的组件中取出props */}
        <Home level={99} />
        <Profile />
        <HelloFriend />
        <About />
      </div>
    )
  }
}

export default App