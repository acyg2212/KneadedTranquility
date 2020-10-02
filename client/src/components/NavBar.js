import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    return (
        <div className="navbar">
            <div className="link-container">
                <NavLink className="link" exact to="/" activeClassName="is-selected">Home</NavLink>
            </div>
            <div className="link-container">
                <NavLink className="link" to="/services" activeClassName="is-selected">Services</NavLink>
            </div>
            <div className="link-container">
                <NavLink className="link" to="/about-us" activeClassName="is-selected">About Us</NavLink>
            </div>
            <div className="link-container">
                <NavLink className="link" to="/appointments" activeClassName="is-selected">Book Now</NavLink>
            </div>
        </div>
    )
}

export default NavBar;