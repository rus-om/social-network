import React from "react";
import {LoadingSpinner} from "./LoadingSpinner";
import Paginator from "./Paginator/Paginator";
import User from "./User/User";
import Pagination from "react-js-pagination";
import {usersArrayType} from "../../redux/usersReducer";


export type UsersStatePropsType = {
    users: Array<usersArrayType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type UsersDispatchPropsType = {
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
    setUsersAC: (users: Array<usersArrayType>) => void
    setCurrentPageAC: (currentPage: number) => void
    setTotalUsersCountAC: (totalUsersCount: number) => void
    toggleFolowingInProgressAC: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}
export type onPageChangedType = {
    onPageChanged: (p: number) => void
}

type UsersPropsType = {
    isFetching: boolean,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (p: number) => void,
    currentPage: number,
    users: Array<usersArrayType>
    follow: (userDd: number) => void
    unfollow: (id: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}


export const UsersC = (props: UsersPropsType) => {
    return <> {props.isFetching
            ? <LoadingSpinner/>
            : <div><Pagination itemClass="page-item"
                               linkClass="page-link"
                               activePage={props.currentPage}
                               itemsCountPerPage={props.pageSize}
                               totalItemsCount={props.totalUsersCount}
                               pageRangeDisplayed={10}
                               onChange={props.onPageChanged}/>
{/*            <Paginator totalUsersCount={props.totalUsersCount}
                              pageSize={props.pageSize}
                              onPageChanged={props.onPageChanged}
                              currentPage={props.currentPage}/>*/}
                {props.users.map(u => <User follow={props.follow}
                                            followingInProgress={props.followingInProgress}
                                            unfollow={props.unfollow}
                                            user={u}
                                            key={u.id}/>
                 )}
            </div>}
        </>
}

export default UsersC