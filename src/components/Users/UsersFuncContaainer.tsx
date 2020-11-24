import {useDispatch, useSelector} from "react-redux";
import UsersC, {UsersStatePropsType, UsersDispatchPropsType} from "./UsersC";
import {followTC, getUsersTC,
    setCurrentPageAC,
    setFetchingAC,
    setUsersAC, toggleFolowingInProgressAC,
    unfollowTC, usersArrayType
} from "../../redux/usersReducer";
import React, { useEffect } from "react";
import { AppRootStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

export const UsersFuncContainer = () => {
    const dispatch = useDispatch()
    const toggleFollowingProgress = (isFetching: boolean, userId: number) => dispatch(toggleFolowingInProgressAC(isFetching, userId))
    const follow = (userId: number) => dispatch (followTC(userId))
    const unfollow = (userId: number) => dispatch (unfollowTC(userId))

    const users= useSelector<AppRootStateType, usersArrayType[]>(state => state.users.users)
    const pageSize= useSelector<AppRootStateType, number>(state => state.users.pageSize)
    const totalUsersCount= useSelector<AppRootStateType, number>(state => state.users.totalUsersCount)
    const currentPage= useSelector<AppRootStateType, number>(state => state.users.currentPage)
    const isFetching= useSelector<AppRootStateType, boolean>(state => state.users.isFetching)
    const followingInProgress= useSelector<AppRootStateType, Array<number>>(state => state.users.followingInProgress)

    useEffect(() => {
    dispatch(getUsersTC(currentPage,pageSize))
      }, [])

    const onPageChanged = (p: number) => {
        dispatch(setFetchingAC(true))
        dispatch(setCurrentPageAC(p))
        usersAPI.getUsers(currentPage,pageSize).then(data => {
                dispatch(setUsersAC(data.items))
                dispatch(setFetchingAC(false))
            })
    }
    return <UsersC
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        users={users}
        isFetching={isFetching}
        unfollow={unfollow}
        follow={follow}
        toggleFollowingProgress={toggleFollowingProgress}
        followingInProgress={followingInProgress}
    />
}

type UsersPropsType =
    UsersStatePropsType &
    UsersDispatchPropsType