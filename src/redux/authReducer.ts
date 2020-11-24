import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ActionType} from "./redux-store";

export const setAuthUserDataAC = (id: number | null, login: string | null, email: string | null,
                                  isAuth: boolean, captchaUrl : string | null):
    SetAuthUserDataActionType  => {
    return ({type: "SET-AUTH-USER-DATA", id, login, email, isAuth, captchaUrl})
}

export const setCaptchaUrlAC = (captchaUrl: string):
    SetCaptchaUrlActionType  => {
    return ({type: "SET-CAPTCHA-URL", captchaUrl})
}

export const setAuthUserDataTC = () => async (dispatch: Dispatch) => {
    const response = await authAPI.authMe()
        if (response.data.resultCode === 0){
            dispatch(setAuthUserDataAC(response.data.data.id, response.data.data.login,
                response.data.data.email, true, null))
        }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0){
            dispatch(setAuthUserDataTC())
        } else {
            if (response.data.resultCode === 10){
                dispatch(getCaptchaUrlTC())
            }
            let action = stopSubmit('login', {_error: response.data.messages[0]})
            dispatch(action)
        }
}

export const getCaptchaUrlTC = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptcha()
        dispatch(setCaptchaUrlAC(response.url))
}

export const logoutTC = () => async (dispatch: any) => {
    const response = await authAPI.logout()
        if (response.data.resultCode === 0){
            dispatch(setAuthUserDataAC(null,  null, null, false, null))
        }
}

let initialState: AuthReducerInitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: AuthReducerInitialStateType = initialState, action: ActionType): AuthReducerInitialStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA": {
            return ({...state, id: action.id, login: action.login, email: action.email,
                isAuth: action.isAuth, captchaUrl: action.captchaUrl})
        }
        case "SET-CAPTCHA-URL":
            return ({...state, captchaUrl: action.captchaUrl})
        default:
            return state
    }
}

export type AuthReducerInitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

export type SetAuthUserDataActionType = {
    type: "SET-AUTH-USER-DATA"
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

export type SetCaptchaUrlActionType = {
    type: "SET-CAPTCHA-URL"
    captchaUrl: string
}


export default authReducer