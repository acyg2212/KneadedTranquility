import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = props => {
    console.log(props)
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='schedulerDiv'>
            <div className="calendarDiv">
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            <div className="timeDiv">

            </div>
        </div>
    )
}

export default Calendar