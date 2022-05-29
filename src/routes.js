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
