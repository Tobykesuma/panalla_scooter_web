import React from 'react'
import './About.css'
import image from '../../constant/image'

const About = () => {
  return (
    <section className='app__bg app__wrapper section__pading' id='about'>
        <div className='app__wrapper__img app__wrapper__img__reverse'>
            <img src={image.logo} alt='about__image' />
        </div>

        <div className='app__wrapper__info'>
            <div className='app__about__mxauto'>
                <img src={image.ContactOutline} className='app__outline__image' alt='outline__image' />
            </div>

            <h1 className='app__about__headtext'>Contact us</h1>
            <h2 className='app__about__subtext'>What we believe in</h2>

            <div className='app__about__content'>
                <p className='app__about__subtext__text'>
                    Bio data here
                </p>
                <button className='button__booking' type='button'>
                    <a href=''>
                        BOOKING NOW
                    </a>
                </button>
            </div>

        </div>
    </section>
  )
}

export default About