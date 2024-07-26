import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 由于懒加载使用的是异步的，使用需要使用suspense提供一个应急方案，当组件没加载完毕前显示应急方案的内容 */}
    <Suspense fallback={<h2>Loading...</h2>}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
);
