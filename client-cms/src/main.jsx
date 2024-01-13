import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import Register from './pages/RegisterPage.jsx';
import UploadImage from './pages/UploadImage.jsx';
import CreateArticle from './pages/CreateArticle.jsx';

const authCMS = () => {
  const access_token = localStorage.access_token;
  if (!access_token) {
    throw redirect("/login");
  }
  return null;
};

const loginProtection = () => {
  const access_token = localStorage.access_token;
  if (access_token) {
    throw redirect("/home");
  }
  return null;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/categories',
        element: <CategoryPage />,
      },
      {
        path: '/upload/:id',
        element: <UploadImage />,
      },
      {
        path: '/create-article', // Add a route for CreateArticle
        element: <CreateArticle />,
      },
    ],
  },
  {
    path: '/',
    element: <LoginPage />,
    // loader: loginProtection
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
