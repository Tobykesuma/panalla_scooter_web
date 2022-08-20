import React from 'react';
import './Footer.css';
import { 
  Container,
  Row,
  Col,
  ListGroupItem,
  ListGroup
} from 'reactstrap';
import image from '../../constant/image';

const quickLinks = [
  {
    path: '/privacy-policy',
    display: 'Privary Policy',
  },
  {
    path: '/rental-requirements',
    display: 'Rental Reqiurements',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
  {
    path: '/scooters',
    display: 'Rent Scooters',
  },
  {
    path: '/gallery',
    display: 'Gallery',
  },
];


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className='app__footer'>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className='app__footer__logo'>
              <a href='/' className='d-flex align-items-center gap-2'>
                <img src={image.logo} className='footer__logo__image' />
              </a>
            </div>
            <p className='app__footer-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

          <Col lg='2' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title'>Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <a href={item.path}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title mb-4'>Head Office</h5>
              <p className='office__info'>Jln. Benesari No.01, Kuta, Badung, Bali</p>
              <p className='office__info'>Phone: +62 812345678910</p>
              <p className='office__info'>Email : @infopanallascooterbali.com</p>
              <p className='office__info'>Office Time: 8AM - 9PM</p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='12'>
            <div className='mb-4'>
              <h5 className='footer__link-title'>Newsletter</h5>
              <p className='section__description2'>Subscribe our newsletter</p>
              <div className='newsletter'>
                <input type='email' placeholder='Email' />
                <span>
                  <i class='bx bxs-send'>
                    <a href='mailto:@infopanallascooterbali.com'></a>
                  </i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='12'>
            <div className='footer__bottom'>
              <p className='section__description d-flex align-items-center justify-content-center gap-1 pt-4'>
                <i class='bx bx-copyright'></i>Copyright Panalla Scooter Rental Bali {year} All Rights Reserved. Design and Developed by Tobi Kesuma.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer