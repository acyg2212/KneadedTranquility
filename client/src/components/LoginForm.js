import React from 'react';
import { connect } from 'react-redux';
import { actions, thunks } from '../store/auth';

const LoginForm = props => {
    console.log(props)
    return (
        <div className="form-container">
            <ul className="errors">
                {props.errors ?
                    props.errors.errors.map(error =>
                        <li>{error}</li>) : ""
                }
            </ul>
            <form>
                <h1>Sign In</h1>
                <h7>Sign in below or create an account.</h7>
                <div>
                    <input onChange={props.updateEmailValue} value={props.email || ''} type="email" placeholder="E-Mail" required />
                </div>
                <div>
                    <input onChange={props.updatePasswordValue} value={props.password || ''} type="password" placeholder="Password" required />
                </div>
                <div>
                    <button onClick={props.tryLogin}>Log In</button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        updateEmailValue: event => dispatch(actions.updateEmailValue(event.target.value)),
        updatePasswordValue: event => dispatch(actions.updatePasswordValue(event.target.value)),
        tryLogin: (event) => {
            event.preventDefault();
            dispatch(thunks.tryLogin());
        }
    };
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        errors: state.auth.errors,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);