import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bot from "./components/Bot";
import Thankyou from './components/Thankyou';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chatbot",
    element: <Bot />,
  },
  {
    path: "/thankyoupage",
    element: <Thankyou />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


