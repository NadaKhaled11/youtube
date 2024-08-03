import React, { useState } from 'react'
import './Feededit.css'
import one from '../../../assets/images/one.png'
import two from '../../../assets/images/two.png'
import three from '../../../assets/images/three.png'
import four from '../../../assets/images/four.png'
import five from '../../../assets/images/five.png'
import six from '../../../assets/images/six.png'
import seven from '../../../assets/images/seven.png'
import eight from '../../../assets/images/eight.png'
import { Link } from 'react-router-dom'

const Feededit = () => {

    const [videos, setVideos] = useState ([
        {
            id: 1,
            categ:1,
            image: one,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 2,
            categ:1,
            image: two,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 3,
            image: three,
            categ:2,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 4,
            categ:3,
            image: four,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 5,
            categ:3,
            image: five,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 6,
            categ:1,
            image: six,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 7,
            categ:3,
            image: seven,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 8,
            categ:4,
            image: eight,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 9,
            categ:3,
            image: one,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 10,
            categ:1,
            image: two,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 11,
            categ:8,
            image: three,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 12,
            categ:6,
            image: four,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 13,
            categ:5,
            image: five,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 14,
            categ:6,
            image: six,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        },
        {
            id: 15,
            categ:9,
            image: seven,
            titleOne: "Best channel to learn codeing",
            titleTwo:'Web Developer',
            para: '15k views &bull; 2 days ago'
        }

    ])

  return (
    <div className="feed">
    {videos.map ((video) => (
        <Link to={`video/${video.categ}/${video.id}`} className="card"  key={video.id} >
            <img src={video.image} alt="" />
            <h2>{video.titleOne}</h2>
            <h3>{video.titleTwo}</h3>
            <p>{video.para}</p>
        </Link>
    ))}
</div>
  )
}

export default Feededit