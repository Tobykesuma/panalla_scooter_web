import React from 'react';
import './Scooters.css';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import ScooterItem from '../../components/ScooterItem/ScooterItem';
import scooterData from '../../constant/ScooterData';


const Scooters = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className='d-flex align-items-center gap-3 mb-5'>
                        <span className='d-flex align-items-center gap-2'>
                        <i class='bx bx-sort'> Sort By</i>
                        </span>

                        <select>
                            <option>Select</option>
                            <option value='low'>Low to High</option>
                            <option value='high'>High to Low</option>
                        </select>
                    </div>
                </Col>
                    {scooterData.map((item) => (
                        <ScooterItem item={item} key={item.id} />
                    ))}        
            </Row>
        </Container>
    </section>
  )
}

export default Scooters