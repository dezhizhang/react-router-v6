import React from "react";

export function Router({ children, location, navigator }) {
  let navigatorContext = { navigator };
  return <></>;
}

export function Routes({ children }) {
  return useRoutes(createRoutesFromChildren);
}

export function useLocation() {}

export function matchPath() {}

export function useRoutes(routes) {
  // 获取当前路径
  let location = useLocation();
  let pathname = location.pathname;
  for (let i = 0; i < routes.length; i++) {
    let { path, element } = routes[i];
    let match = matchPath(path, pathname);
    if (match) return element;
  }
}

export function createRoutesFromChildren(children) {
  let routes = [];
  React.Children.forEach(children, (element) => {
    let route = {
      path: element.props.path,
      element: element.props.element,
    };
    routes.push(route);
  });
  return routes;
}
