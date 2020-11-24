import React, {ChangeEvent, useState} from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType, updateProfileTC} from "../../../redux/profileReducer";
import ProfileStatusFunc from './ProfileStatusFunc';
import userPhoto from "../../../assets/images/userPhoto.png";
import {ProfileData} from "./ProfileData";
import { ProfileDataReduxForm} from "./ProfileDataForm";
import {useDispatch} from "react-redux";

export type ProfileinfoPropsType = {
    profile: ProfileType | null
    statusText: string
    updateStatusTC: (status: string) => void
    updatePhotoTC: (photo: File) => void
    isOwner: boolean
}

const Profileinfo = (props: ProfileinfoPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()

    const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.updatePhotoTC(e.target.files[0])
        }
    }
    const onSubmit = (formData: any) => {
        dispatch(updateProfileTC(formData))//если выпадает ошибка, отменить не отменять editMode

        setEditMode(false)
        //props.loginTC(formData.login, formData.password, formData.rememberMe)
    }
    return (
        <>
            <div className={classes.content}>
                <div><img src={props.profile?.photos.large || userPhoto}/></div>
                {props.isOwner && <input type="file" onChange={(e) => uploadPhoto(e)}/>}
                <ProfileStatusFunc statusText={props.statusText} updateStatusTC={props.updateStatusTC}/>
                { editMode
                    ? <ProfileDataReduxForm setEditMode={setEditMode} profile={props.profile}  onSubmit={onSubmit}/>
                    : <ProfileData setEditMode={setEditMode} profile={props.profile}/>
                }


            </div>
        </>
    )
}


export default Profileinfo
