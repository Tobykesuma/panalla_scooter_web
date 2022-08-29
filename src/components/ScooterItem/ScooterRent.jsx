import React, { useState } from 'react';
import ScooterItem from './ScooterItem';
import scooterData from '../../constant/ScooterData';
import './ScooterRent.css';
import {
    Container,
    Col,
    Row,
} from 'reactstrap'

const ScooterRent = () => {
    const [visible, setVisible] = useState(3);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };

  return (
    <section className='app__scooter__rent section___pading'>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                    <h6 className='scooter__rent-sub'>Come with</h6>
                    <h2 className='scooter__rent-title'>Hot Offers</h2>
                </Col>

                {scooterData.slice(0, visible).map((item) => (
                    <ScooterItem item={item} key={item.id} />
                ))}
            </Row>
                <div className='app__scooter-btn align-items-center justify-content-center'>
                    <button className='btn btn__scooter w-50 align-items-center justify-content-center' onClick={showMoreItems}>
                        Load More
                    </button>
                </div>

        </Container>
    </section>
  )
}

export default ScooterRent