import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Header from './components/Header/Header';
// import CreateAccount from './CreateAccount';
import Library from './components/Library/library';
import About from './components/About/About';
import Home from './components/Home/Home.jsx';
import './i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/library',
        element: <Library />,
      },
      {
        path: '/About',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
