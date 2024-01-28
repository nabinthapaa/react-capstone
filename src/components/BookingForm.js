import React from 'react';
import { OCCASSION } from '../constants/options';
import { capitalize } from '../utils/utils';

function BookingForm({ data, changeData, handleSubmit, disabled }) {
    return (
        <div className='reserve-table-wrapper'>
            <div className="form-wrapper">
                <h1 className='registration_header'>Reservation Form</h1>
                <div className="form container">
                    <form className='form-container' onSubmit={handleSubmit}>
                        <label className='form-group'>
                            <span className='reg_span'>Date:</span>
                            <input className='form-input' type='date' value={data.date} min={data.date} onChange={e => changeData({ ...data, date: e.target.value })} />
                        </label>
                        <label className='form-group'>
                            <span className='reg_span'>Time:</span>
                            <input className='form-input' type='time' min="10:00" max="21:00" value={data.time} onChange={e => changeData({ ...data, time: e.target.value })} />
                        </label>
                        <label className='form-group'>
                            <span className='reg_span'>No. of Persons:</span>
                            <input className='form-input' type='number' min={1} value={data.noOfPerson} onChange={e => changeData({ ...data, noOfPerson: e.target.value })} />
                        </label>
                        <label className='form-group'>
                            <span className='reg_span'>Occasion</span>
                            <select className='form-input' value={data.occassion} onChange={e => changeData({ ...data, occassion: e.target.value, })} >
                                <Options />
                            </select>
                        </label>
                        <button className='form-submit form-input' disabled={disabled} type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Options() {
    return Object.entries(OCCASSION).map((keyValue) => <option key={keyValue[0]} value={keyValue[0]}>{capitalize(keyValue[1])}</option>)
}

export default BookingForm