import {useDispatch, useSelector} from "react-redux";
import React, { useEffect } from "react";
import { AppRootStateType} from "../../redux/redux-store";
import {logoutTC, setAuthUserDataAC, setAuthUserDataTC} from "../../redux/authReducer";
import Header from "./Header";

export const HeaderFuncContainer = () => {
    const dispatch = useDispatch()

    const setAuthUserData= (id: number, login: string, email: string) =>
        dispatch(setAuthUserDataAC(id, login, email, true, null))
    const logout = () => dispatch(logoutTC())

    const login = useSelector<AppRootStateType, string | null>(state=> state.auth.login)
    const isAuth = useSelector<AppRootStateType, boolean>(state=> state.auth.isAuth)

    useEffect(()=> {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        dispatch(setAuthUserDataTC()), []})
    return <Header
        setAuthUserData={setAuthUserData}
        logoutTC={logout}
        login={login}
        isAuth={isAuth}
    />
}
