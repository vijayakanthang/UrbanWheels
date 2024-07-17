import React from 'react'
import logo from "../assets/urbanwheels2.png"
import "../stylesheet/NavigationBar.css"
import {NavLink} from "react-router-dom"

const NavigationBar = () => {
  return (
    <>
    <div className='navigation-container'>
      <div className='logo-div'>
        <img src={logo} className='logo'  />
      </div>
      <div className='navigation-elements'>
        <NavLink to ="/browse">
        <p className='nav-element'>Browse Cars</p>
        </NavLink>
        <p className='nav-element'>Rent-a-Car</p>
        <p className='nav-element'>Rent-Your-Car</p>
        <p className='nav-element'>Sign In</p>
      </div>
    </div>
    </>
  )
}

export default NavigationBar
