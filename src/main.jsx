import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './routes.jsx'

const router = createBrowserRouter(Routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} ></RouterProvider>
      
  </StrictMode>
)
