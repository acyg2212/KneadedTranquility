import React, { useEffect, useState } from 'react';

const MyAppointments = props => {
    let [pastAppointments, setPastAppointments] = useState(null);
    let [futureAppointments, setFutureAppointments] = useState(null)

    useEffect(() => {
        const loadAppointments = async () => {
            const userId = window.localStorage.getItem('userId');
            const response = await fetch('/api/appointments/my-appointments/',
                {
                    method: "PUT",
                    body: JSON.stringify({ userId }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            if (response.ok) {
                let { appointments } = await response.json()
                let [month, date, year] = (new Date()).toLocaleDateString().split("/")

                let earlyDates = appointments.filter(appointment => {
                    let splitDate = appointment.date.split('-')
                    let appMonth = Number(splitDate[1])
                    let appDate = Number(splitDate[2])
                    let appyear = Number(splitDate[0])
                    let numMonth = Number(month)
                    let numDate = Number(date)
                    let numYear = Number(year)
                    console.log(appyear, appDate, appMonth)
                    if (appMonth < Number(month) && appyear === numYear) {

                        return appointment;
                    } else if (appMonth === numMonth && appDate < numDate && appyear === numYear) {
                        console.log("here")
                        return appointment;
                    } else if (appyear < numYear) {
                        return appointment;
                    } else { }

                })

                let lateDates = appointments.filter(appointment => {
                    let splitDate = appointment.date.split('-')
                    let appMonth = Number(splitDate[1])
                    let appDate = Number(splitDate[2])
                    let appyear = Number(splitDate[0])
                    let numMonth = Number(month)
                    let numDate = Number(date)
                    let numYear = Number(year)
                    console.log(appyear, appDate, appMonth)
                    if (appMonth > Number(month) && appyear === numYear) {

                        return appointment;
                    } else if (appMonth === numMonth && appDate > numDate && appyear === numYear) {
                        console.log("here")
                        return appointment;
                    } else if (appyear > numYear) {
                        return appointment;
                    } else { }

                })
                console.log(earlyDates)
                setPastAppointments(earlyDates);
                setFutureAppointments(lateDates)
            }
        }
        loadAppointments()

    }, [props])

    return (
        <div className="my-appointments-container">
            <div className="my-appointments-container__container">
                <h4>Past Appointments</h4>
                <div className="past-appointments">
                    {pastAppointments ? pastAppointments.map(appointment =>
                        (<div className="appointments" key={appointment.id}>
                            <span className="date">{appointment.date}</span>
                            <span className='time'>{appointment.Time.time}</span>
                            <span className="staff">{appointment.Employee.firstName}</span>
                            <span className='service'>{appointment.Service.serviceName}</span>
                        </div>)) : "No Past Appointments to Show"}
                </div>
            </div>
            <div className="my-appointments-container__container">
                <h4>Future Appointments</h4>
                <div className="past-appointments">
                    {futureAppointments ? futureAppointments.map(appointment => (
                        <div className="appointments" key={appointment.id}>
                            <span className="date">{appointment.date}</span>
                            <span className='time'>{appointment.Time.time}</span>
                            <span className="staff">{appointment.Employee.firstName}</span>
                            <span className='service'>{appointment.Service.serviceName}</span>
                        </div>)) : "No Future Appointments Scheduled"}
                </div>
            </div>
        </div>
    )
}

export default MyAppointments;