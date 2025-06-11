import React from 'react'
import './Home.css'
import video from '../../assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { FaFilter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { TbApps } from "react-icons/tb";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video  src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homecontent container">
        <div className="textDiv">
          <span className="smallText">
            Welcome to TRVL!!
          </span>
          <h1 className="homeTitle">
            The Best souvenirs are the memories
            we make along the way.
          </h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here.." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <div className="input flex">
              <input type="date" placeholder="Enter name here.." />
              
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price</label>
              <h1 className="total">Ksh.50,000</h1>
            </div>
            <div className="input flex">
              <input type="range" max="50000" min="1000"/>
            </div>
          </div>

          <div className="search_option flex">
            <FaFilter className="icon" />
            <span>MORE..</span>
          </div>

      
        </div>


        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook  className="icon"/>
            <FaInstagram  className="icon"/>
            < FaXTwitter  className="icon"/>

          </div>

          <div className="leftIcons">
            <CiBoxList  className="icon"/>
            <TbApps  className="icon"/>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
