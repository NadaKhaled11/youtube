import React from 'react'
import './Navbar.css'
import logo from '../../../assets/images/logo.png'
import { IoMdMenu,IoIosNotifications } from "react-icons/io";
import { BiSolidVideoPlus } from "react-icons/bi";
import { FaSearch,FaUpload  } from "react-icons/fa";
import userIcon from '../../../assets/images/user.png'

const Navbar = ({setSidebar}) => {
  return (
   <nav className='flex-div'>
    <div className="nav-left flex-div">
    <IoMdMenu  className='menuIcon' onClick={() => setSidebar(prev=>prev===false?true:false)}/>
    <img className='logo'src={logo} alt="" />
    </div>

    <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" placeholder='Search' />
        <FaSearch />
        </div>
    </div>
    
    <div className="nav-right flex-div">
    <FaUpload />
    <BiSolidVideoPlus />
    <IoIosNotifications />
    <img src={userIcon} className='userIcon' alt="" />



    


    </div>

   </nav>
  )
}

export default Navbar