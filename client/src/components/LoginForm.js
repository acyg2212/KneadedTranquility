import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actions, thunks } from '../store/auth';

const LoginForm = props => {
    if (props.token) {
        return <Redirect to="/appointments" props={props} />
    }
    return (
        <div className="form-container">
            <ul className="errors">
                {props.errors ?
                    props.errors.errors.map(error =>
                        <li>{error}</li>) : ""
                }
            </ul>
            <form>
                <h1 className="login-header">Sign In</h1>
                <p className="form-p">Sign in below or</p>
                <a className="form-link" href="/sign-up">create an account.</a>
                <div>
                    <input onChange={props.updateEmailValue} value={props.email || ''} type="email" placeholder="E-Mail" required />
                </div>
                <div>
                    <input onChange={props.updatePasswordValue} value={props.password || ''} type="password" placeholder="Password" required />
                </div>
                <div>
                    <button onClick={props.tryLogin}>Log In</button>
                </div>
                <div>
                    <button onClick={props.tryDemo}>Demo Login</button>
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
        },
        tryDemo: (event) => {
            event.preventDefault();
            dispatch(thunks.tryDemo());
        }
    };
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        errors: state.auth.errors,
        token: state.auth.token,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);