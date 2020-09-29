import React from 'react';
import { connect } from 'react-redux';
import { actions, thunks } from '../store/auth';
import { Redirect } from 'react-router-dom';

const RegisterUser = props => {
    console.log(props)
    if (props.token) {
        return <Redirect to="/appointments" />
    }
    return (
        <div className="form-container">
            <ul className="errors">
                {props.errors ?
                    props.errors.errors.map((error, idx) =>
                        <li key={idx}>{error}</li>) : ""
                }
            </ul>
            <form>
                <h3>Create a Kneaded Tranquility Account</h3>
                <p className="form-p">Create a new account below</p>
                <a className="form-link" href=" /login">or sign in here.</a>
                <div>
                    <input onChange={props.updateFirstNameValue} value={props.firstName || ''} type="text" placeholder="First Name" required />
                </div>
                <div>
                    <input onChange={props.updateLastNameValue} value={props.lastName || ''} type="text" placeholder="Last Name" required />
                </div>
                <div>
                    <input onChange={props.updateEmailValue} value={props.email || ''} type="email" placeholder="E-Mail" required />
                </div>
                <div>
                    <input onChange={props.updatePhoneNumberValue} value={props.phoneNumber || ''} type="tel" placeholder="Phone Number" required />
                </div>
                <div>
                    <input onChange={props.updatePasswordValue} value={props.password || ''} type="password" placeholder="Password" required />
                </div>
                <div>
                    <input onChange={props.updateConfirmPasswordValue} value={props.confirmPassword || ''} type="password" placeholder="Confirm Password" required />
                </div>
                <div>
                    <button onClick={props.tryRegister}>Register</button>
                </div>
            </form>
        </div >
    );
};

const mapDispatchToProps = dispatch => {
    return {
        updateEmailValue: event => dispatch(actions.updateEmailValue(event.target.value)),
        updatePasswordValue: event => dispatch(actions.updatePasswordValue(event.target.value)),
        updatePhoneNumberValue: event => dispatch(actions.updatePhoneNumberValue(event.target.value)),
        updateFirstNameValue: event => dispatch(actions.updateFirstNameValue(event.target.value)),
        updateLastNameValue: event => dispatch(actions.updateLastNameValue(event.target.value)),
        updateConfirmPasswordValue: event => dispatch(actions.updateConfirmPasswordValue(event.target.value)),
        tryLogin: (event) => {
            event.preventDefault();
            dispatch(thunks.tryLogin());
        },
        tryRegister: (event) => {
            event.preventDefault();
            dispatch(thunks.tryRegister());
        }
    };
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        phoneNumber: state.auth.phoneNumber,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
        confirmPassword: state.auth.confirmPassword,
        errors: state.auth.errors,
        token: state.auth.token,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);