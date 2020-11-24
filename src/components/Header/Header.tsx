import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props: HeaderPropsType) {
    return (<>
            <header className={classes.header}>
                {props.isAuth
                    ? <div>{props.login} <button className="btn btn-outline-primary" onClick={props.logoutTC}>logout</button>
                </div>
                    : <NavLink to={'/login'}>login</NavLink>}
                {/*<img src="https://icdn.lenta.ru/images/0000/0001/000000011163/pic_1358261032.jpg"
                     alt="header logo"/>*/}
            </header>
        </>
    )
}

export type HeaderStatePropsType = {
    login: string | null
    isAuth: boolean
}

export type HeaderDispatchPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    logoutTC: () => void
}

export type HeaderPropsType = HeaderStatePropsType & HeaderDispatchPropsType


export default Header