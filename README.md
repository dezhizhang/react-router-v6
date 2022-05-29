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
### 使用新的useNavigate
```jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  function handleUser() {
    navigate("/user");
  }

  return (
    <div>
      <p>home</p>
      <button onClick={handleUser}>跳转到user</button>
    </div>
  );
}

export default Home;
```
### 使用useRoutes配置路由
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { routes } from './routes';
import { BrowserRouter, useRoutes } from 'react-router-dom';

function App() {
  return useRoutes(routes)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

```
```jsx
import Home from "./components/Home";
import Profile from "./components/Profile";
import User from "./components/User";
import UserAdd from "./components/UserAdd";
import UserList from "./components/UserList";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "/user/add",
        element: <UserAdd />,
      },
      {
        path: "/user/list",
        element: <UserList />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

```




