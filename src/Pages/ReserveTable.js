import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import Toast from '../components/Toast';
import { OCCASSION } from '../constants/options';
import { ValidateRegistration } from '../utils/utils';


export const defaultData = {
    date: new Date().toISOString().split('T')[0],
    time: "10:00",
    noOfPerson: 2,
    occassion: OCCASSION.other
}

function ReserveTable() {
    const [data, setData] = useState(defaultData);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true)
        const validation = ValidateRegistration(data)
        if (validation.response) {
            setDisabled(false)
            navigate('/confirm_booking')
            return
        }
        alert(validation.message)


    }

    return (
        <>
            <BookingForm data={data} changeData={setData} handleSubmit={handleSubmit} disabled={disabled} />
        </>
    )
}


export default ReserveTable
