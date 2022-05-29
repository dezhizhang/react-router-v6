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

