import React, { useState } from 'react';
import { connect } from 'react-redux';
import BookNow from './BookNow';
import MyAppointments from './MyAppointments';

const deleteUserData = () => {
    window.localStorage.clear();
    window.location.reload();
}


const Appointments = props => {
    const [bookNow, setBookNowValue] = useState(false);

    let firstName = window.localStorage.getItem('firstName');


    return (
        <>
            <div className="appointments-container">
                <div className="appointments-nav">
                    <div className="my-appointments-button-group">
                        <button className="my-appointments-button" onClick={() => setBookNowValue(false)}>My Appointments</button>
                        <button className="my-appointments-booknow" onClick={() => setBookNowValue(true)}>Book Now</button>
                    </div>
                    <button className="logout" onClick={() => deleteUserData()}>Log Out</button>
                </div>
                <h2>Welcome {firstName}</h2>
                <div className="appointment-block">
                    <div className={bookNow ? "" : "isHidden"}>
                        <BookNow />
                    </div>
                    <div className={bookNow ? "isHidden" : ""}>
                        <MyAppointments />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStatetoProps = state => ({
    firstName: state.auth.firstName,
})

export default connect(mapStatetoProps)(Appointments);