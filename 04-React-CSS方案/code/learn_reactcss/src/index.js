import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01-内联样式的CSS/App';
// import App from './02-普通的CSS写法/App';
// import App from './03-CSS_Modules/App';
// import App from './04-Less编写方式/App';
// import App from './05-CSS_in_JS写法/App';
import App from './06-classnames库/App';

import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: 'red', size: '50px' }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// ES6:标签模板字符串
// 1.模板字符串的基本使用
// const name = 'tony'
// const age = 18
// const str = `my name is ${name}, age is ${age}`
// console.log(str);

// 2.标签模板字符串的使用
// 先定义一个函数 参数为剩余参数(接收时参数会被集合成一个数组)
// function foo(...args) {
//   console.log(args);
// }

// foo('tony', 18)

// 函数后跟上模板字符串相当于在执行函数
// 他会将每一个动态插入的位置做一个字符串的截取，例如这里他会截取动态部分${name},${age}
// 最终拆成 'my name is ' ', age is ', '' 这三部分，然后将这三部分传入一个数组中，作为调用foo函数的第一个参数,
// 然后分别将动态部分${name}的数据,${age}的数据作为调用foo函数的第二,第三个参数
// foo`my name is ${name}, age is ${age}`
// 通过模板字符串执行foo的最终打印结果：[['my name is ', ', age is ', '',], 'tony', 18]
