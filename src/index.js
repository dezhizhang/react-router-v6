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

