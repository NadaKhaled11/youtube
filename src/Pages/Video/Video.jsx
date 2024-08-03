import React, { useState } from 'react'
import './Video.css'
import PlayVideo from '../Components/Play-video/PlayVideo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Video = () => {

  const [playvideo, setPlayvideo] = useState()
  const router = createBrowserRouter ([
    {
      path:'/video/:categ/:videoId'
    },
  ])
  
  return (
    <div className="playContainer">
      {/* <PlayVideo/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default Video