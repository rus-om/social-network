import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {ActionType, followActionType, unfollowActionType} from "./redux-store";

export const followAC = (id: number): followActionType => ({type: "FOLLOW", id: id})
export const unfollowAC = (id: number): unfollowActionType => ({type: "UNFOLLOW", id: id})
export const setUsersAC = (users: Array<usersArrayType>): setUsersActionType => ({type: "SET_USERS", users: users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({
    type: "SET_CURRENT_PAGE",
    currentPage
})
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountActionType => ({
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount
})
export const setFetchingAC = (isFetching: boolean): setFetchingActionType => ({type: "SET-FETCHING", isFetching})
export const toggleFolowingInProgressAC = (isFetching: boolean, userId: number): toggleFolowingInProgressActionType => ({
    type: "TOGGLE-FOLLOWING-IN-PROGRESS",
    isFetching,
    userId
})

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true))
    const data = await  usersAPI.getUsers(currentPage, pageSize)
        dispatch(setFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
}

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFolowingInProgressAC(true, userId))
    const response = await  usersAPI.follow(userId)
        if(response.data.resultCode === 0) {
            dispatch(followAC(userId))
            dispatch(toggleFolowingInProgressAC(false, userId))
        }
}

export const unfollowTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFolowingInProgressAC(true, userId))
    const response = await usersAPI.unfollow(userId)
        if(response.data.resultCode === 0) {
            dispatch(unfollowAC(userId))
            dispatch(toggleFolowingInProgressAC(false, userId))
        }
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case "SET_USERS": {
            return {...state, users: action.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "SET-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-FOLLOWING-IN-PROGRESS": {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export type setTotalUsersCountActionType = {
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount: number
}

export type UsersLocationType = {
    city: string
    country: string
}

export type setCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}

export type toggleFolowingInProgressActionType = {
    type: "TOGGLE-FOLLOWING-IN-PROGRESS",
    isFetching: boolean,
    userId: number,
}

export type UsersType = {
    users: Array<usersArrayType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

export type setFetchingActionType = {
    type: "SET-FETCHING",
    isFetching: boolean
}

export type usersArrayType = {
    id: number
    followed: boolean
    name: string
    urlPhoto: string
    status: string
    location: UsersLocationType
}

export type setUsersActionType = {
    type: "SET_USERS"
    users: Array<usersArrayType>
}


export default usersReducer