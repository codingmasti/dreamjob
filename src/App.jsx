import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Jobs from './pages/jobs/Jobs'
import Companies from './pages/companies/Companies'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import JobDetail from './pages/job_detail/JobDetail'
import Dashbord from './pages/dashbord/Dashbord'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/jobs",
          element: <Jobs />
        },
        {
          path: "/jobs/:id",
          element: <JobDetail />
        },
        {
          path: '/companies',
          element: <Companies />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/dashbord',
          element: <Dashbord />
        }
      ]
    }
  ])
  return( <RouterProvider router={router} />)
  
}

export default App
