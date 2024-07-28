import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react'

const Hello = memo(forwardRef((props, ref) => {
  const inputRef = useRef()
  // 使用可以让子组件对父组件传入的ref进行处理
  // useImperativeHandle(要处理的ref, 回调函数(回调函数的返回值作为ref的current))
  // 将要给父组件件用的方法通过useImperativeHandle的return暴露出去
  useImperativeHandle(ref, () => {
    return {
      focus() {
        console.log(inputRef.current);
        inputRef.current.focus()
      },
      setValue(value) {
        inputRef.current.value = value
      }
    }
  })

  return (
    <input type="text" ref={inputRef} />
  )
}))

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  const getDOM = () => {
    console.log(titleRef.current);
    inputRef.current.focus()
    inputRef.current.setValue('tony')
  }

  return (
    <div>
      <h2 ref={titleRef}>Hello</h2>
      <Hello ref={inputRef} />
      <button onClick={getDOM}>获取DOM</button>

    </div>
  )
})

export default App