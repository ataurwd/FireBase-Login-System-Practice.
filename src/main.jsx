import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home';
import MainLayout from './components/MainLayout';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';


const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={route} />  
</StrictMode>,
)
