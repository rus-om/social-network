import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="nav flex-column">
            <div className="nav-link"><NavLink to="/profile"className="nav-link">Profile</NavLink></div>
            <div className="nav-link"><NavLink to="/dialogs" className="nav-link">Messages</NavLink></div>
            <div className="nav-link"><a href="/#"className="nav-link">News</a></div>
            <div className="nav-link"><a href="/##" className="nav-link">Music</a></div>
            <div className="nav-link"><a href="/###" className="nav-link">Settings</a></div>
        </nav>
    )

}

export default Navbar