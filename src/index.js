import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StorageUtils from "./util/storage-utils";
import Variables from "./global/variables";

// 读取浏览器本地存储 => 内存
StorageUtils.removeUser();
StorageUtils.saveUser({name: "admin_test"});
let user = StorageUtils.getUser();
Variables.user = user;

// 开始渲染
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
