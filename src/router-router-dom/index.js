import { createBrowserHistory, createHashHistory } from "history";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Route } from "react-router";

export function HashRouter({ children }) {
  let historyRef = useRef(null);
  if (historyRef.current === null) {
    historyRef.current = createHashHistory();
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);

  return (
    <Route
      children={children}
      location={state.location}
      navigatorType={state.action}
      navigator={history}
    />
  );
}

export function BrowserRouter({ children }) {
  let historyRef = useRef(null);
  if (historyRef.current === null) {
    historyRef.current = createBrowserHistory();
  }
  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);

  return (
    <Route
      children={children}
      location={state.location}
      navigatorType={state.action}
      navigator={history}
    />
  );
}
