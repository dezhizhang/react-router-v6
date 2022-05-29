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
