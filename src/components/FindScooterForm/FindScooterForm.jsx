import React from 'react'
import './FindScooterForm.css'
import {
    Form,
    FormGroup
} from 'reactstrap';

const FindScooterForm = () => {
  return (
    <Form className='scooter__form'>
        <div className='form__scooter__rent d-flex align-items-center justify-content-center'>
            {/* <FormGroup className='form__group'>
                <input type='text' placeholder='Form address' required />
            </FormGroup>

            <FormGroup className='form__group'>
                <input type='date' placeholder='Journey date' required />
            </FormGroup>

            <FormGroup className='form__group'>
                <input className='journey__time' type='time'
                placeholder='Start from' required />
            </FormGroup> */}

            <FormGroup className='select__group'>
                <input type='date' placeholder='Date' required />
            </FormGroup>

            <FormGroup className='select__group'>
               
                <select>
                <option value='selected'>2 Days</option>
                <option value='3days'>3 Days</option>
                <option value='4days'>4 Days</option>
                <option value='5days'>5 Days</option>
                <option value='6days'>6 Days</option>
                <option value='1week'>1 Week</option>
                <option value='2week'>2 Week</option>
                <option value='3week'>3 Week</option>
                <option value='1month'>1 Month</option>
                </select>   
                
            </FormGroup>

            {/* <div className='pickedup__group'>
            <h5>Pickup Location</h5> */}
            <FormGroup className='select__group'>
                <select>
                    <option value='selected'>Our Office</option>
                    <option value='location__send'>Send to my location</option>
                </select>
            </FormGroup>
            {/* </div> */}

            <FormGroup className='select__group'>
                <select>
                    <option value='matic'>Matic</option>
                    <option value='non-matic'>Non Matic</option>
                </select>
            </FormGroup>

            <FormGroup className='select__group'>
                <button className='btn find__scooter-btn'>
                    <a href='' className='link__form__scooter'>
                    Find Scooter
                    </a>
                </button>
            </FormGroup>
        </div>
    </Form>
  )
}

export default FindScooterForm