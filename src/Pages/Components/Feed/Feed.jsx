import React from 'react'
import './Feed.css'
import one from '../../../assets/images/one.png'
import two from '../../../assets/images/two.png'
import three from '../../../assets/images/three.png'
import four from '../../../assets/images/four.png'
import five from '../../../assets/images/five.png'
import six from '../../../assets/images/six.png'
import seven from '../../../assets/images/seven.png'
import eight from '../../../assets/images/eight.png'

const Feed = () => {
  return (
    <div className="feed">
        <div className="card">
            <img src={one} alt="" />
            <h2>Best channel to learn codeing</h2>
            <h3>Web Developer</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={two} alt="" />
            <h2>Best channel to learn codeing</h2>
            <h3>Web Developer</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={three} alt="" />
            <h2>Best channel to learn codeing</h2>
            <h3>Web Developer</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={four} alt="" />
            <h2>Best channel to learn codeing</h2>
            <h3>Web Developer</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={five} alt="" />
            <h2>Best channel to learn codeing</h2>
            <h3>Web Developer</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={six} alt="" />
            <h2>Best channel to learn codeing</h2>
            <h3>Web Developer</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={seven} alt="" />
            <h2>Best channel to learn codeing</h2>
            <h3>Web Developer</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={eight} alt="" />
            <h2>Best channel to learn codeing</h2>
            <h3>Web Developer</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
    </div>
  )
}

export default Feed