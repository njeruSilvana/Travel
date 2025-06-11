import React, {useState} from 'react'
import './Navbar.css'
import { MdOutlineModeOfTravel } from "react-icons/md"
import { IoCloseSharp } from "react-icons/io5"
import { HiDotsVertical } from "react-icons/hi"

const Navbar = () => {
  const [active, setActive] = useState('navBar')

  const showNav =() =>{
    setActive('navBar activeNavbar')
  }

   const removeNavbar =() =>{
    setActive('navBar')
  }


  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="a" className="logo flex">
            <h1> <MdOutlineModeOfTravel className='icon' /> TRVL</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navlists flex">
            <li className="navItem">
              <a href="a" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="a" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="a" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="a" className="navLink">About Us</a>
            </li>

            <li className="navItem">
              <a href="a" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="a" className="navLink">Contact</a>
            </li>

            <button className='btn'>
              <a href="a"> BOOK NOW</a>
            </button>
    
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <IoCloseSharp className='icon' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <HiDotsVertical className='icon' />
        </div>
      </header>


    </section>
  
   
  )
}

export default Navbar
