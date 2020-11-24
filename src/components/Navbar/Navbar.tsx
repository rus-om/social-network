import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css';

function Navbar() {
    return (
        <nav className="nav flex-column">
            <img src="https://icdn.lenta.ru/images/0000/0001/000000011163/pic_1358261032.jpg"
                 alt="header logo" className={classes.img}/>
            <div className="nav-link"><NavLink to="/profile"className="nav-link">Profile</NavLink></div>
            <div className="nav-link"><NavLink to="/dialogs" className="nav-link">Messages</NavLink></div>
            <div className="nav-link"><NavLink to="/users" className="nav-link">Users</NavLink></div>
            <div className="nav-link"><a href="/#"className="nav-link">News</a></div>
            <div className="nav-link"><a href="/##" className="nav-link">Music</a></div>
            <div className="nav-link"><a href="/###" className="nav-link">Settings</a></div>
        </nav>
    )

}

export default Navbar