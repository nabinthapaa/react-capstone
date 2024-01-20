import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ConfirmationModal';

function ReserveTable() {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState('10:00');
    const [person, setPerson] = useState(1);
    const [occasion, setOccassion] = useState('other');
    const [disabled, setDisabled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()

    const resetForm = () => {
        setDate(new Date().toISOString().split('T')[0])
        setTime('10:00')
        setPerson(1)
        setOccassion('other')
        setDisabled(false)
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowModal(true)
        await new Promise(resolve => setTimeout(resolve, 5000))
        resetForm();
        navigate('/')
    }

    return (
        <>
            <div className='reserve-table-wrapper'>
                <div class="form-wrapper">
                    <div class="form container">
                        <h1>Reservation Form</h1>
                        <form className='form-container' onSubmit={handleSubmit}>
                            <label className='form-group'>
                                <span>Date:</span>
                                <input className='form-input' type='date' value={date} min={date} onChange={e => setDate(e.target.value)} />
                            </label>
                            <label className='form-group'>
                                <span>Time:</span>
                                <input className='form-input' type='time' min="9:00" max="21:00" value={time} onChange={e => setTime(e.target.value)} />
                            </label>
                            <label className='form-group'>
                                <span>Persons:</span>
                                <input className='form-input' type='number' min={1} value={person} onChange={e => setPerson(e.target.value)} />
                            </label>
                            <label className='form-group'>
                                <span>Occasion</span>
                                <select className='form-input' value={occasion} onChange={e => setOccassion(e.target.value)} >
                                    <option value='other'>Other</option>
                                    <option value='anniversary'>Anniversary</option>
                                    <option value='birthday'>Birthday</option>
                                </select>
                            </label>
                            <button className='form-submit' disabled={disabled}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`${showModal ? "modal" : "hideModal"}`}>
                <ConfirmationModal {...{ date, person, time, occasion }} />
            </div>
        </>
    )
}

export default ReserveTable