import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/homepage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import Layout from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
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
