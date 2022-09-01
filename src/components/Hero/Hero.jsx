import React from 'react'
import './Hero.css';
import image from '../../constant/image';
import '../Navbar/Navbar.css';


const Hero = () => {
    
        return (
            <section className='app__hero'>
                <div className='app__hero-container'>
                    <div className='app__hero-left'>
                        <h1>Make Your Ride Easy & Affordable.</h1>
                        <p>Explore Bali with relax riding position and powerfull engines.
                        Find your new experience with Scooter Trip in Bali.
                        </p>
                        <div className='app__hero-input-container'>
                            <button className='button__booking-home'>
                                <a href='https://wa.me/6287862121513?text=Hello%20Panalla%20Scooters%20Bali%20I%20want%20to%20rent%20scooter.%20Please%20give%20your%20scooter%20recomendations.' target='__blank'>BOOKING NOW</a>
                            </button>
                        </div>
                    </div>

        
                    <div className='app__hero-right'>
                        <div className='app__hero-img-container'>
                            <img src={image.HeroImage} alt='' />
                        </div>
                    </div>
                    
                </div>

                
        
        
            </section>
        
          )
    }


export default Hero;