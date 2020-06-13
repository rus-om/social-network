import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";



function Profile(props: ProfilePageType) {
    return (
        <div className={classes.content}>
            <Profileinfo />
            <MyPosts postData={props.postData}/>
        </div>
    )

}

export default Profile