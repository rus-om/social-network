import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostDataType} from "../../redux/store";

type ProfilePageType = {
    postData: Array <PostDataType>
    dispatch: (action: ActionType) => void
    message: string
}


function Profile(props: ProfilePageType) {
    return (
        <div className={classes.content}>
            <Profileinfo />
            <MyPosts postData={props.postData}
                     dispatch={props.dispatch}
                     message={props.message}
                     />
        </div>
    )

}

export default Profile