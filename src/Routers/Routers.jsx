import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Scooters from '../pages/Scooters/Scooters';
import Testimonial from '../pages/Testimonial/Testimonial';
import About from '../pages/About/About';





const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/' />} />
        <Route path='/scooters' element={<Scooters />} />
        <Route path='/scooters/:slug' element={<></>} />
        <Route path='/testimoni' element={<Testimonial />} />
        <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default Routers