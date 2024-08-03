import React from 'react'
import './Sidebar.css'
import { FaHome,FaGamepad,FaMusic,FaNewspaper} from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { TbLogs } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import simon from '../../../assets/images/simon.png'
import tom from '../../../assets/images/tom.png'
import megan from '../../../assets/images/megan.png'
import cameron from '../../../assets/images/cameron.png'



const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar  ${sidebar?"":"small-sidebar"}`}>
      <div className="short-links">
        {/* links */}
        <div className="side-link">
          <FaHome/>
          <p>Home</p>
         </div>
        <div className="side-link">
          <FaGamepad/>
          <p>Games</p>
         </div>
        <div className="side-link">
          <FaCarSide/>
          <p>Automobils</p>
         </div>
        <div className="side-link">
          <MdOutlineSportsSoccer/>
          <p>Sports</p>
         </div>
        <div className="side-link">
          <PiTelevisionSimpleBold/>
          <p>Entertainment</p>
         </div>
        <div className="side-link">
          <GrTechnology/>
          <p>Technology</p>
         </div>
        <div className="side-link">
          <FaMusic/>
          <p>Music</p>
         </div>
        <div className="side-link">
          <TbLogs/>
          <p>Blogs</p>
         </div>
        <div className="side-link">
          <FaNewspaper/>
          <p>News</p>
         </div>
         <hr/>
      </div>
      {/* Subscribes */}
      <div className="subscribed-list">
      <h3>Subscribed</h3>
      <div className="side-links">
        <img src={simon} alt="" />
        <p>Travel</p>
      </div>
      <div className="side-links">
        <img src={tom} alt="" />
        <p>Programming</p>
      </div>
      <div className="side-links">
        <img src={megan} alt="" />
        <p>5-Minutes Crafts</p>
      </div>
      <div className="side-links">
        <img src={cameron} alt="" />
        <p>Web Development</p>
      </div>
      </div>
    </div>
  )
}

export default Sidebar