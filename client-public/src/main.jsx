import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/homepage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import Layout from './Layout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/details/:id',
        element: <DetailPage />,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
