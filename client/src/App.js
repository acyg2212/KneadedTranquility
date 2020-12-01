import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from './components/NavBar';
import Logo from './assets/Kneaded-Tranquility-Logo.gif';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import Appointments from './components/Appointments';
import ServicesPage from './components/ServicesPage';
import AboutUs from './components/AboutUs';


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
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/services" component={ServicesPage} />
                    <ProtectedRoute isLoggedIn={props.token} path="/appointments">
                        <Appointments />
                    </ProtectedRoute>
                </Switch>
            </BrowserRouter>
            <footer>
                <div className="footer-left">
                    About Us
                </div>
                <div className="footer-middle">
                    <p className="footer-p">2020 Kneaded Tranquility</p>
                </div>
                <div className="footer-right">
                    <p className="footer-p">Created by</p>
                    <a className="footer-link" href="https://github.com/acyg2212">Aaron</a>
                </div>
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
