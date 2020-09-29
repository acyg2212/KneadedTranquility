import React from 'react';
import { connect } from 'react-redux';


const Appointments = props => {

    return (
        <>
            <div className="appointments-container">
                <div className="appointments-nav">
                    <div>
                        <button>My Appointments</button>
                        <button>Book Now</button>
                    </div>
                    <button>Log Out</button>
                </div>
                <h2>Welcome {props.firstName}</h2>
                <div className="appointment-block">

                </div>
            </div>
        </>
    )
}

const mapStatetoProps = state => ({
    firstName: state.auth.firstName
})

export default connect(mapStatetoProps)(Appointments);