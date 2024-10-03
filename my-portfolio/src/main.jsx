import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import App from './App'
import About from './pages/About'
import Projects from './pages/Projects'
import MyProject from './pages/MyProject'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import PageNotFound from './pages/PageNotFound'

const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/",
    children: [
      {index: true, element: <Home/>},
      {path: "/About", element: <About/>},
      {path: "/Projects", element: <Projects/>},
      {path: "/MyProject/:id", element: <MyProject/>},
      {path: "Contact", element: <Contact/>},
      {path: "Skills", element: <Skills/>},
      {path: "*", element: <PageNotFound/>}
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
