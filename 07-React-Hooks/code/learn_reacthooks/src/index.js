import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContext, UserContext } from './05-useContext的使用/context';
// import App from './01-不使用Hooks/App';
// import App from './02-计数器实现对比/App';
// import App from './03-useState的使用/App';
// import App from './04-useEffect的使用/02-修改标题-hook实现';
// import App from './04-useEffect的使用/05-执行时机-控制回调执行';
// import App from './05-useContext的使用/App';
import App from './06-useReducer的使用/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={{ name: 'tony', age: 18 }}>
    <ThemeContext.Provider value={{ color: 'red', size: '30px' }}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
);
