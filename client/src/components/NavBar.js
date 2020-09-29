import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    return (
        <div className="navbar">
            <NavLink exact to="/" activeClassName="is-selected">Home</NavLink>
            <NavLink to="/services" activeClassName="is-selected">Services</NavLink>
            <NavLink to="/about-us" activeClassName="is-selected">About Us</NavLink>
            <NavLink to="/appointments" activeClassName="is-selected">Book Now</NavLink>
        </div>
    )
}

export default NavBar;