import React from 'react'
import "../stylesheet/HomePage.css"
import hero from "../assets/hero.svg"
import step1 from '../assets/step1.svg'
import step2 from '../assets/step2.svg'
import step3 from '../assets/step3.svg'
import step4 from '../assets/step4.svg'
import car from '../assets/car.svg'
import shield from '../assets/shield.svg'
import dollar from '../assets/dollar.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import X from "../assets/twitterX.svg"



const HomePage = () => {
    return (
        <div>
            <div className='landing'>
                {/* Landing */}
                <div id="car-div"
                    style={{
                        backgroundImage: `url(${hero})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        borderRadius:"20px",

                    }}>
                    <h2>Find your perfect car on Urban Wheels</h2>
                    <p>Discover cars available for your journey!!</p>
                    <input type='text' className='landing-search' placeholder='  Search'></input>
                </div>

                {/* Instructions */}
                <h4> HOW TO RENT CAR FROM URBAN CARS</h4>
                <div className='instructions-container'>
                    <div className='instructions-card'>
                        <h2>Step 1</h2>
                        <img src={step1} className='instructions-image'></img>
                        <p>Select the Location and Car</p>
                    </div>
                    <div className='instructions-card'>
                        <h2>Step 2</h2>
                        <img src={step2} className='instructions-image'></img>
                        <p>Sign In to Reerve Your Car</p>
                    </div>
                    <div className='instructions-card'>
                        <h2>Step 3</h2>
                        <img src={step3} className='instructions-image'></img>
                        <p> Enter the Details Required</p>
                    </div>
                    <div className='instructions-card'>
                        <h2>Step 4</h2>
                        <img src={step4} className='instructions-image'></img>
                        <p>Complete the Payment</p>
                    </div>
                </div>

                {/* About Section */}
                <h1 className='about-text'>Why Choose Us for<br/> Your Car Rental ?</h1>
                <div className='about-container'>
                    <div className='about-elements'>
                        <img src={car} className='about-image' />
                        <h3>Wide Selection of Cars</h3>
                        <p>Choose from a variety of cars to suit your needs, from compact cars to luxury SUVs.</p>
                    </div>
                    <div className='about-elements'>
                        <img src={dollar} className='about-image' />
                        <h3>Affordable Prices</h3>
                        <p>Get the best deals and discounts on car rentals without compromising on quality.</p>
                    </div>
                    <div className='about-elements'>
                        <img src={shield} className='about-image' />
                        <h3>Safe & Secure</h3>
                        <p>Our cars are regularly serviced and thoroughly checked to ensure your safety.</p>
                    </div>
                </div>

                {/* Testimonials */}
                    <h1>Testimonials</h1>
                <div className='testimonials-container'>

                    <div className='testimonials-elements'>
                        <div><img src=''/>Name</div>
                        <p>Lorem ipsum dolor sit amet consectetur. Fringilla purus morbi vulputate interdum a pharetra egestas. Tortor neque eget quam non. Sollicitudin sagittis rhoncus est ullamcorper vivamus viverra bibendum id vulputate. Fames fringilla fusce viverra pharetra dignissim.</p>
                    </div>

                    <div className='testimonials-elements'>
                        <div><img src=''/>Name</div>
                        <p>Lorem ipsum dolor sit amet consectetur. Fringilla purus morbi vulputate interdum a pharetra egestas. Tortor neque eget quam non. Sollicitudin sagittis rhoncus est ullamcorper vivamus viverra bibendum id vulputate. Fames fringilla fusce viverra pharetra dignissim.</p>
                    </div>

                    <div className='testimonials-elements'>
                        <div><img src=''/>Name</div>
                        <p>Lorem ipsum dolor sit amet consectetur. Fringilla purus morbi vulputate interdum a pharetra egestas. Tortor neque eget quam non. Sollicitudin sagittis rhoncus est ullamcorper vivamus viverra bibendum id vulputate. Fames fringilla fusce viverra pharetra dignissim.</p>
                    </div>

                </div>

                {/* Footer */}
                <div className='footer'>
                    <div className='footer-elements'>
                        <p className='footer-name'>Urban Wheels</p>
                        <p> Find your Perfect Rental Car</p>
                        <div className='footer-img'>
                            <img src={instagram}/>
                            <img src={facebook}/>
                            <img src={X}/>
                        </div>
                    </div>

                    <div className='footer-elements'>
                        <h4>Quick Links</h4>
                        <p>Home</p>
                        <p>Contact</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>

                    <div className='footer-elements'>
                        <h4>Contact Us</h4>
                        <p>No:2 Vidhya Nagar,<br/>Civil Aerodrome Post,<br/>Peelamedu,<br/>Coimbatore 641014</p>

                    </div>
                     
                </div>

            </div>
        </div>
    )
}

export default HomePage
