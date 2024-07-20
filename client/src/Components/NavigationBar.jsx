import React from 'react'
// import logo from "../assets/urbanwheels1.png"
import "../stylesheet/NavigationBar.css"
import { NavLink } from "react-router-dom"

const NavigationBar = () => {
  return (
    <>
      <div className='navigation-container'>
        <div className='logo-div'>
          <NavLink to='/' className='navigation-elements'>
            {/* <img src={logo} className='logo'  /> */}
            <h2 className='navigation-elements'>URBAN WHEELS</h2>
          </NavLink>

        </div>
        <div className='navigation-elements'>
          <NavLink to="/browse">
            <p className='nav-element'>Browse Cars</p>
          </NavLink>

          <NavLink to="/rent-your-car">
            <p className='nav-element'>Become Host</p>
          </NavLink>

          <NavLink to="/support">
            <p className='nav-element'>Support</p>
          </NavLink>

        </div>
        {/* <div className='rent-signup'>
          <NavLink to="/rentcar">
            <p className='nav-element' id='rentcar'>Rent Car</p>
          </NavLink>

          <NavLink to="/SignIn">
            <p className='nav-element' id='signup'>Log In</p>
          </NavLink>
        </div> */}
      </div>
    </>
  )
}

export default NavigationBar
