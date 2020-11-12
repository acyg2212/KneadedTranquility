import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Calendar = props => {
    const [startDate, setStartDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState([])

    useEffect(() => {
        const loadTimes = async () => {
            const response = await fetch(`/api/appointments/date`,
                {
                    method: "POST",
                    body: JSON.stringify({ props, startDate }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            if (response.ok) {
                let availablility = await response.json()
                let { availableTimes } = availablility
                setAvailableTimes(availableTimes)
            }
        }
        loadTimes()
    }, [startDate, props])

    const clickHandler = async (event) => {

        const { employeeId } = props.props;
        const { serviceId } = props.props.props;
        const timeId = event.target.value;
        let userId = window.localStorage.getItem("userId")
        console.log(userId)
        const response = await fetch(`/api/appointments/`, {

            method: "POST",
            body: JSON.stringify({ employeeId, serviceId, timeId, startDate, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            window.location.reload()
        }

    }

    return (
        <div className='schedulerDiv'>
            <div className="calendarDiv">
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            <div className="timeDiv">
                {startDate ? availableTimes.map(time => <button className="available-time-button" onClick={clickHandler} value={time.id} key={time.id}>{time.time}</button>) : ""}
            </div>
        </div>
    )
}

export default Calendar