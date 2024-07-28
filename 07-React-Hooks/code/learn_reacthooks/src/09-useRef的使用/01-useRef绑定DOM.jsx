import React, { memo, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  const getDom = () => {
    console.log(titleRef.current);
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>Hello</h2>
      <input type="text" ref={inputRef} />
      <button onClick={getDom}>获取dom</button>
    </div>
  )
})

export default App