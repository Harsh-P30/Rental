import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Route from './components/Routers/Route.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import Vehicels from './pages/Vehicels.jsx'
import Details from './pages/Details.jsx'
import Gallery from './pages/Gallery.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Route />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/vehicels',
          element: <Vehicels/>
        },
        {
          path: '/details',
          element: <Details/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/gallery',
          element: <Gallery/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        
      ]
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
