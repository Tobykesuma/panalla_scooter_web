import React, { useState } from 'react';
import './Navbar.css';
import image from '../../constant/image';
import { FaBars, FaTimes} from 'react-icons/fa';
// import { Link } from 'react-router-dom';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    
    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'app__header app__header-bg' : 'app__header'} id='navbar'>
            <nav className='app__navbar'>
                <a href='/' className='app__navbar__logo'>
                    <img src={image.logo} alt='' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color:'#fff'}} />)
                        : (<FaBars size={30} style={{ color: '#fff'}} />)
                    }
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-items'>
                        <a href='/scooters' onClick={closeMenu}>Rent Scooters</a> 
                    </li>
                    <li className='nav-items'>
                        <a href='/about' onClick={closeMenu}>About</a> 
                    </li>
                    <li className='nav-items'>
                        <a href='/services' onClick={closeMenu}>Services</a>
                    </li>
                    <li className='nav-items'>
                        <a href='/testimoni' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-items'>
                        <a href='/gallery' onClick={closeMenu}>Gallery</a>
                    </li>
                    <button className='button__booking'>
                        <a href='https://api.whatsapp.com/send?phone=6287862127513&text=Hello Panalla Scooter Bali' onClick={closeMenu}>BOOK NOW</a>
                </button>
                </ul>
                
            </nav>
    
        </div>
  )
}

export default Navbar