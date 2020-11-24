import React from 'react';
import Profileinfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from '../../redux/profileReducer';


export type ProfileStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
    statusText: string
    userId?: number
}

export type ProfileDispatchPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
    getStatusTC: (userId: number) => void
    getUserProfileTC ?: (userId: number) => void
    updateStatusTC: (status: string) => void
    updatePhotoTC: (photo: File) => void
}

type OwnProps = {
    isOwner: boolean
}

export type ProfilePropsType = ProfileStatePropsType & ProfileDispatchPropsType & OwnProps


function Profile(props: ProfilePropsType) {
/*    if (!props.isAuth)
        return <Redirect to={"/login"}/>*/
    return (
        <div >
            <Profileinfo
                profile={props.profile}
                statusText={props.statusText}
                updateStatusTC={props.updateStatusTC}
                updatePhotoTC={props.updatePhotoTC}
                isOwner={props.isOwner}
            />
            <MyPostsContainer />
        </div>
    )

}

export default Profile