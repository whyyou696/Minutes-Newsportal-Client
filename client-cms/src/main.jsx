import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';
import UploadImage from './pages/UploadImage.jsx';
import CreateArticle from './pages/CreateArticle.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import CreateCategory from './pages/CreateCategory.jsx';
import EditArticle from './pages/EditArticle.jsx';
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
        path: '/create-category',
        element: <CreateCategory />,
      },
      {
        path: '/upload/:id',
        element: <UploadImage />,
      },
      {
        path: '/create-article',
        element: <CreateArticle />,
      },
      {
        path: '/edit-article/:id',
        element: <EditArticle/>,
      }
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
