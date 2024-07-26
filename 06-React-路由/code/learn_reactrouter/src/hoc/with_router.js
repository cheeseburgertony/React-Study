import { useNavigate, useParams, useSearchParams } from "react-router-dom"

const withRouter = (OriginComponent) => {
  return (props) => {
    // 路由跳转
    const navigate = useNavigate()

    // 获取动态参数  /detail/:id
    const params = useParams()

    // 获取查询参数 /user?name=tony&age=18
    const [searchParams] = useSearchParams()
    // 转化成一个对象后再传递过去（另一种写法）
    const query = Object.fromEntries(searchParams)

    const router = { navigate, params,searchParams, query}

    return <OriginComponent {...props} router={router} />
  }
}

export default withRouter