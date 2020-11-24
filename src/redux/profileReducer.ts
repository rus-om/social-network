import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {ProfileDataType} from "../components/Profile/ProfileInfo/ProfileData";
import {stopSubmit} from "redux-form";
import { ActionType } from "./redux-store";

export const addPostAC = (newPostTextBody: string): AddPostActionType  => ({type: "ADD-POST", newPostTextBody})
export const setUserProfileAC = (profile: ProfileType): setUserProfileActionType => ({type: "SET-USER-PROFILE", profile})
export const setStatusAC = (statusText: string): setStatusActionType => ({type: "SET-STATUS", statusText})
export const updatePhotoSuccessAC = (photo: File): UpdatePhotoConfirmActionType => ({type: "UPDATE-PHOTO-CONFIRM", photo})

export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfileAC(response.data))
}

export const updatePhotoTC = (photo: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updatePhoro(photo)
        dispatch(updatePhotoSuccessAC(response.data))
}

export const updateProfileTC = (profile: ProfileDataType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id
    const response = await profileAPI.updateProfile(profile)
        if(!response.data.resultCode){
            if(userId) {
                dispatch(getUserProfileTC(userId))
            }
        } else {
            dispatch(stopSubmit('profileForm', {_error: response.data.messages[0]}))
        }
}


export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
            dispatch(setStatusAC(response.data))
}

export const updateStatusTC = (statusText: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(statusText)
        if (response.resultCode === 0) {
            dispatch(setStatusAC(statusText))
        }
}


let initialState: ProfilePageType = {
    postData: [
        {id: 1, message: "Hey, how are you?", likesCount: 122},
        {id: 2, message: "It's my first post", likesCount: 20},
    ],
    profile: null,
    statusText: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostDataType = {
                id: 5,
                message: action.newPostTextBody,
                likesCount: 0,
            }
            return {
                ...state, postData: [...state.postData, newPost]
            }}
        case "SET-USER-PROFILE": {
            return (
            {...state, profile: action.profile}
        )}
        case "SET-STATUS" : {
            return (
                {...state, statusText: action.statusText}
            )
        }
        case "UPDATE-PHOTO-CONFIRM" : {
            return (
                {...state, profile: {...state.profile, photos: action.photo} as ProfileType}
            )
        }
        default:
            return state
    }
}


export type AddPostActionType = {
    type: "ADD-POST"
    newPostTextBody: string
}
export type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}
export type setUserProfileActionType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}

export type setStatusActionType = {
    type: "SET-STATUS"
    statusText: string
}

export type UpdatePhotoConfirmActionType = {
    type: "UPDATE-PHOTO-CONFIRM"
    photo: any
}


export type ProfilePageType = {
    postData: Array<PostDataType>
    profile: ProfileType | null
    statusText: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: ProfilePhotosType
}
export type ProfileContactsType = {
    "facebook": string | null
    "website": string | null
    "vk": string | null
    "twitter": string | null
    "instagram": string | null
    "youtube": string | null
    "github": string | null
    "mainLink": string | null
}

export type ProfilePhotosType = {
    small: string | null
    large: string | null
}

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export default profileReducer