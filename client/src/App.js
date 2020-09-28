import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProtectedRoute from "./components/ProtectedRoute";



function App(props) {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/login" activeClassName="active">Log In</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/login">
                    <LoginForm />
                </Route>

                <ProtectedRoute isLoggedIn={props.token} path="/">
                    <h1>My Home Page</h1>
                </ProtectedRoute>
            </Switch>
        </BrowserRouter>
    );
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
}
export default connect(mapStateToProps)(App);
