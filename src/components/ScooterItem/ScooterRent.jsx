import React from 'react';
import ScooterItem from './ScooterItem';
import scooterData from '../../constant/ScooterData';
import './ScooterRent.css';
import {
    Container,
    Col,
    Row,
} from 'reactstrap'

const ScooterRent = () => {
  return (
    <section className='app__scooter__rent section___pading'>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                    <h6 className='scooter__rent-sub'>Come with</h6>
                    <h2 className='scooter__rent-title'>Hot Offers</h2>
                </Col>

                {scooterData.slice(0, 6).map((item) => (
                    <ScooterItem item={item} key={item.id} />
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default ScooterRent