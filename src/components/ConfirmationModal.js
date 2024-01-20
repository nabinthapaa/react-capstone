import React from "react"


function ConfirmationModal({ date, time, person, occasion }) {
    return (
        <div>
            <h1>Table no. 3 Reserved for: </h1>
            <p>Date: <span>{date}</span></p>
            <p>Time: <span>{time}</span></p>
            <p>Persons: <spa>{person}</spa></p>
            <p>Occasion: <span>{occasion}</span></p>
        </div>
    )
}

export default ConfirmationModal