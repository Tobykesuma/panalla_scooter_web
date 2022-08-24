import React from 'react';
import './ScooterItem.css';
import {
    Col
} from 'reactstrap';
import {
    imgUrl,
    shortbrandName,
    scooterName,
    price,
    price_week,
    hubungi,
} from'../../constant/ScooterData';

const ScooterItem = (props) => {
    const {
        imgUrl,
        shortbrandName,
        scooterName,
        price,
        price_week,
        hubungi

    } = props.item;

    return (
        <Col lg='4' sm='6' className='mb-5'>
            <div className='scooter__item'>
                <div className='scooter__img'>
                    <img src={imgUrl} alt='' className='image__scooters w-100' />
                </div>

                <div className='scooter__item-content'>
                    <h4 className='app__scooter__item-title text-center'>{scooterName}</h4>
                    <h6 className='scooter__rent__price text-center mt-'>
                        IDR {price}K <span>/ Day</span>
                    </h6> 
                    <h6 className='scooter__rent__price text-center mt-'>
                        IDR {price_week}K <span>/ Week</span>
                    </h6>

                    <div className='scooter__item-info d-flex align-items-center justify-content-center mt-3'>
                    {/* <span className='d-flex align-items-center gap-1'>
                        {model}   
                    </span>
                    <span className='d-flex align-items-center gap-1'>
                        {automatic}    
                    </span>
                    <span className='d-flex align-items-center gap-1'>
                        {speed}    
                    </span>     */}
                    </div>

                    <button className='w-50 scooter__item-btn scooter__btn-rent'>
                        <a href={`${hubungi}`}>Rent</a>
                    </button>

                    <button className='w-50 scooter__item-btn scooter__btn-details'>
                        <a href={`/scooters/${shortbrandName}`}>Details</a>
                    </button> 
                </div>
            </div>
        </Col>
  )
}

export default ScooterItem