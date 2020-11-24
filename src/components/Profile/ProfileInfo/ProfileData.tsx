import React, { SetStateAction, Dispatch } from 'react';

type PropsType ={
    profile: ProfileDataType | null
    setEditMode: Dispatch<SetStateAction<boolean>>
}

export type ProfileDataType = {
    aboutMe: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    photos: {
        small: string | null,
        large: string | null
    }
}

export const ProfileData = (props: PropsType) => {
    return <div>
        <button className="btn btn-primary" onClick={()=> props.setEditMode(true)}>Edit</button>
        <div><b>Full name: </b>{props.profile?.fullName}</div>
        <div><b>About me: </b>{props.profile?.aboutMe}</div>
        <div><b>Looking for a job: </b>{props.profile?.lookingForAJob? "YES" : "NO"}</div>
        {props.profile?.lookingForAJob && <div><b>Looking for a job description: </b>{props.profile?.lookingForAJobDescription}</div>}
        <div><b>Contacts:</b></div>
        <div><b>Facebook: </b>{props.profile?.contacts.facebook}</div>
        <div><b>Website: </b>{props.profile?.contacts.website}</div>
        <div><b>VK: </b>{props.profile?.contacts.vk}</div>
        <div><b>Twitter: </b>{props.profile?.contacts.twitter}</div>
        <div><b>Instagram: </b>{props.profile?.contacts.instagram}</div>
        <div><b>YouTube: </b>{props.profile?.contacts.youtube}</div>
        <div><b>Main link: </b>{props.profile?.contacts.mainLink}</div>
    </div>
}