import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/userPhoto.png";
import {usersArrayType} from "../../../redux/usersReducer";

import classes from './User.module.css';

type PropsType = {
    user: usersArrayType
    follow: (userDd: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>
}

export const User = (props: PropsType) => {
    return (<div className={classes.cont}>
            <div className="card">
                <NavLink to={`/profile/${props.user.id}`}>
                    <div className={classes.wrapper}><img src={props.user.urlPhoto ? props.user.urlPhoto : userPhoto}
                                                    alt="avatar"/></div>
                </NavLink>
                <h5 className="card-title">{props.user.name}</h5>
                <li className="list-group-item">{props.user.status}</li>
                <div className="list-group list-group-flush">
                    {props.user.followed
                        ? <button className="btn btn-danger"
                                  disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollow(props.user.id)
                                  }}>unfollow</button>
                        : <button className="btn btn-success"
                                  disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.follow(props.user.id)
                                  }}>follow</button>}
                </div>
            </div>
        </div>
    )
}

export default User