import React, { useState } from 'react';
import './Scooters.css';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import ScooterItem from '../../components/ScooterItem/ScooterItem';
import scooterData from '../../constant/ScooterData';
import Categories from './Categories';

const Scooters = () => {
    const [data, setData] = useState(Categories);
    const filterResult=(ScooterItems)=> {
        const result=Categories.filter((curData)=>{
            return curData.category===ScooterItems;
        });
        setData(result);
    }
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
                            <option onClick={()=>setData(Categories)}>Select</option>
                            <option value='low' onClick={()=>filterResult('low')}>Low to High</option>
                            <option value='high' onClick={() => filterResult('high')}>High to Low</option>
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