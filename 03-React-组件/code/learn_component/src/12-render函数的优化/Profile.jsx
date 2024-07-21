import { memo } from "react"

// 在函数组件中通过memo来对组件中的state和props进行是否有变化的判断 从而决定是否调用render进行重新渲染
const Profile = memo((props) => {
  console.log('Profile render');
  return (
    <div>
      <h2>Profile</h2>
      <div>message:{props.message}</div>
    </div>
  )
})

export default Profile