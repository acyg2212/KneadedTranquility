import React, { useState } from 'react';
import { connect } from 'react-redux';
import BookNow from './BookNow';
import MyAppointments from './MyAppointments';



const Appointments = props => {
    const [bookNow, setBookNowValue] = useState(false);

    console.log(bookNow)
    return (
        <>
            <div className="appointments-container">
                <div className="appointments-nav">
                    <div>
                        <button onClick={() => setBookNowValue(false)}>My Appointments</button>
                        <button onClick={() => setBookNowValue(true)}>Book Now</button>
                    </div>
                    <button>Log Out</button>
                </div>
                <h2>Welcome {props.firstName}</h2>
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