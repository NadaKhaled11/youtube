import React from 'react'
import './PlayVideo.css'
import video1 from '../../../assets/images/video1.mp4'
// import { AiFillLike, AiFillDislike  } from "react-icons/ai";
// import { IoShareSocial } from "react-icons/io5";
// import { BsFillSaveFill } from "react-icons/bs";
// import user from '../../../assets/images/user.png'
// import userProfile from '../../../assets/images/userProfile.png'


const PlayVideo = () => {
  return (
    <div className="play-video">
        <video src={video1}></video>
    </div>
  )
}

export default PlayVideo