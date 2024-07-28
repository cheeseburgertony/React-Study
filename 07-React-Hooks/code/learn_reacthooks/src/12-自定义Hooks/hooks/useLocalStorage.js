import { useEffect, useState } from "react"

const useLocalStorage = (key) => {
  // 1.从localStorage中获取数据，并且根据获取到的数据创建组件state
  // useState参数允许是一个回调函数，回调函数返回一个状态
  const [data, setData] = useState(() => {
    const item = localStorage.getItem(key)
    if (!item) return ''
    return JSON.parse(item)
  })

  // 2.监听data改变，一旦发生改变就重新执行localStorage.setItem存储data最新值
  useEffect(() => {
    // 依赖项发生变化时重新设置本地存储
    localStorage.setItem(key, JSON.stringify(data))
  }, [data, key])

  // 3.将data/setData的操作返回给组件，让组件可以使用和修改值
  return [data, setData]
}

export default useLocalStorage