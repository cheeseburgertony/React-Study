import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { StoreContext } from './hoc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Provider>
  // </React.StrictMode>
);
