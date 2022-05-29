# react-router-v6 实现原理

### 基本用法

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import User from "./components/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </BrowserRouter>
);
```
### 二级路由的使用
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import User from './components/User';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UserAdd from './components/UserAdd';
import UserList from './components/UserList';
import Profile from './components/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/user/*' element={<User/>}>
      <Route path='add' element={<UserAdd/>}/>
      <Route path='list' element={<UserList/>}/>
    </Route>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
 </BrowserRouter>
);

```
### 二级子路由
```jsx
import React from "react";
import { Link,Outlet } from 'react-router-dom';
function User() {
  return <div>
    <ul>
      <li><Link to="add">user add </Link></li>
      <li><Link to="list">user list</Link></li>
    </ul>
    <Outlet/>
  </div>;
}

export default User;
```

