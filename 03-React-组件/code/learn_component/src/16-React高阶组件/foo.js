// 普通函数
function foo() {
  console.log('这是一个普通函数');
}
foo()

// 高阶函数
// 参数是函数
function foo2(fn) {
  console.log('参数是函数，这是一个高阶函数');
  setTimeout(() => {
    fn()
  }, 2000)
}
foo2(function () {

})

// 高阶函数
// 返回值是函数
function foo3() {
  function bar() {

  }
  return bar
}

const fn2 = foo3()

// 只要满足以下条件之一就是高阶函数
// 1.接收一个或多个函数作为输入 (参数是函数)
// 2.输出一个函数 (返回值是函数)