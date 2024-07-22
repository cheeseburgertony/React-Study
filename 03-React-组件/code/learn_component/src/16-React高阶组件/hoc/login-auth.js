
function loginAuth(OriginComponent) {
  return (props) => {
    const token = localStorage.getItem('token')

    // 根据是否有token来进行要渲染哪一个
    if (token) {
      return (<OriginComponent {...props} />)
    } else {
      return (<h2>请先登录</h2>)
    }
  }
}

export default loginAuth