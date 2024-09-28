import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import App from './App'

const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/",
    children: [
      {index: true, element: <Home/>}
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
