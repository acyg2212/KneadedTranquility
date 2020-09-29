import React from 'react';
import { connect } from 'react-redux';
import { actions, thunks } from '../store/auth';

const LoginForm = props => {
    return (
        <form>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);