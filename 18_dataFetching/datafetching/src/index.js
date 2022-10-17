import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/Store'
import { Provider } from 'react-redux'
import { getPosts } from './features/TodoState';


const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(getPosts())

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
