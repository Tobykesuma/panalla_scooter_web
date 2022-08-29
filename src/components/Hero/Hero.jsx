import React, { Component } from 'react'
import './Hero.css';
import image from '../../constant/image';
import Slider from 'react-slick';


export default class Hero extends Component {
    render() {
       
    
        return (
         
            <section className='app__hero'>
                <div className='app__hero-container'>

                    <div className='app__hero-left'>
                        <h1>Make Your Ride Easy & Affordable.</h1>
                        <p>Explore Bali with relax riding position and powerfull engines.
                        Find your new experience with Scooter Trip in Bali.
                        </p>
                        <div className='app__hero-input-container'>
                            <button className='btn__hero-btn'>BOOKING NOW</button>
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
}