import React from 'react'
import './Home.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import Feed from '../Components/Feed/Feed'
import Feededit from '../Components/Feed/Feededit'
const Home = ({sidebar}) => {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar? "" : 'large-container'}`}>
      {/* <Feed/> */}
      <Feededit/>
    </div>
    </>
  )
}

export default Home