import React, { memo, useId, useState } from 'react'

const App = memo(() => {

  // 使用useId生成的id，保证在服务器端的id和在客户端(浏览器)的id一致
  // 这样在做同构应用的使用，做hydration的时候不会出现mismatch的错误
  const id = useId()
  const [count, setCount] = useState(0)

  console.log(id);

  return (
    <div>
      <button onClick={e => setCount(count + 1)}>count+1:{count}</button>

      {/* 如果使用其他api生成的id可能会导致服务器端生成的id和客户端生成的id不一样导致hydration mismatch */}
      {/* 使用使用useId生成的id保证id一致 */}
      <label htmlFor={id}>
        <input type="text" id={id} />
      </label>
    </div>
  )
})

export default App