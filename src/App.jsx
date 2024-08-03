import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Navbar from './Pages/Components/Navbar/Navbar'

const App = () => {
  const [sidebar, setSidebar] = useState(true)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home sidebar={sidebar} />
    },
    {
      path: '/video/:id/:section',
      element: <Video />
    }
  ])

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
