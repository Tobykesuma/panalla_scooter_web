import React from 'react';
import './Gallery.css';
import {
    BsInstagram,
    BsArrowLeftShort,
    BsArrowRightShort
} from 'react-icons/bs';
import image from '../../constant/image';




const Gallery = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
        const { current } = scrollRef;
            if (direction === 'left') {
                current.scrollLeft -= 300;
            } else {
                current.scrollLeft += 300;
            }
    };

    return (
        <>
        <div className='app__gallery flex__center' id='gallery'>
            <div className='app__gallery__content'>
                <h1 className='app__gallery__headtext'>Photo Gallery</h1>
                <p className='app__gallery__subtext'>
                   See photos of our satisfied customers. 
                </p>
                <button type='button__gallery' className='button__button__gallery'>
                    <a href='/gallery' className='gallery__links'>
                    View More
                    </a>
                </button>
            </div>

            <div className='app__gallery__images'>
                <div className='app__gallery__images__container' ref={scrollRef}>
                    {[image.Gallery01, image.Gallery02, image.Gallery03, image.Gallery04, image.Gallery05, image.Gallery06, image.Gallery07, image.Gallery08, image.Gallery09, image.Gallery10, image.Gallery11, image.Gallery12, image.Gallery13].map((image, index) => (
                        <div className='app__gallery__image__card flex__center'
                        key={`gallery__image-${index + 1}`}>
                            <img src={image} alt='gallery__image' />
                            <BsInstagram className='gallery__image__icons' />
                        </div>
                    ))}
                </div>
                <div className='app__gallery__images__arrows'>
                    <BsArrowLeftShort className='gallery__arrow__icons' onClick={() => scroll('left')} />
                    <BsArrowRightShort className='gallery__arrow__icons' onClick={() => scroll('right')} />
                </div>

            </div>
        </div>
        </>
  )
}

export default Gallery