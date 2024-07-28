import { useContext } from "react"
import { TokenContext, UserContext } from "../context"

const useUserToken = ()=>{
  const user = useContext(UserContext)
  const token = useContext(TokenContext)

  return [user, token]
}

export default useUserToken