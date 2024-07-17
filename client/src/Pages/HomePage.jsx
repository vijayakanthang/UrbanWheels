import React from 'react'
import "../stylesheet/HomePage.css"
import car from "../assets/background2.jpg"

const HomePage = () => {
    return (
        <div>
            <div className='landing'>
                <img src={car} className='car' />
                <input type='text' className='landing-search' placeholder='  Search'></input>
            </div>
        </div>
    )
}

export default HomePage
