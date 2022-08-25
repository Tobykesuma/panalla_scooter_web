import React from 'react'
import './FormBookingHome.css';
import {
  Form,
  FormGroup
} from 'reactstrap';


const FormBookingHome = (props) => {
  const {
    date,
    whatsapp__api,

  } = props.item;



  return (
    <Form className='form__booking'>
      <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <FormGroup className='form__booking__group'>
          <input type='date' placeholder='Date' required />
        </FormGroup>

        <FormGroup className='form__booking__group-select'>
          <select>
            <option select='selected-option'>2 Days</option>
            <option value='normal-option'>3 Days</option>
            <option value='normal-option'>4 Days</option>
            <option value='normal-option'>5 Days</option>
            <option value='normal-option'>6 Days</option>
            <option value='normal-option'>1 Week</option>
            <option value='normal-option'>2 Week</option>
            <option value='normal-option'>3 Week</option>
            <option value='normal-option'>1 Month</option>
          </select>
        </FormGroup>

        <FormGroup className='form__booking__group-select'>
          <select>
            <option select='selected-option'>Our Office</option>
            <option value='normal-option'>Send to my location</option>
          </select>
        </FormGroup>

        <FormGroup className='form__booking__group'>
          <button className='btn booking__scooter-btn'>
            <a href={`${whatsapp__api}`}>Find Scooter</a>
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FormBookingHome ;