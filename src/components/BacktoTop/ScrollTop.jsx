import React, {useState} from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
import './ScrollTop.css';


function ScrollTop () {
    const [visible, setVisible] = useState(false);
    window.addEventListener('scroll', () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });

    return (
      <div className='app__scrolltop'>
        <a href='#' className={`${visible ? "scroll-block" : "scroll-nonoe"}`}>
            <FaChevronCircleUp />
        </a>
      </div>
  )
}

export default ScrollTop