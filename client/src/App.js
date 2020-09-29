import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from './components/NavBar';
import Logo from './assets/Kneaded-Tranquility-Logo.gif';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';


function App(props) {

    return (
        <>
            <img src={Logo} alt="Kneaded Tranquility Logo" />
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/sign-up">
                        <RegisterUser />
                    </Route>

                    <ProtectedRoute isLoggedIn={props.token} path="/appointments">
                        <h1>My Home Page</h1>
                    </ProtectedRoute>
                </Switch>
            </BrowserRouter>
            <footer>

            </footer>
        </>
    );
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
}
export default connect(mapStateToProps)(App);
