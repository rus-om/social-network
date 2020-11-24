import {connect} from "react-redux";
import UsersC, {UsersStatePropsType, UsersDispatchPropsType} from "./UsersC";
import {followTC, getUsersTC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFolowingInProgressAC,
    unfollowTC
} from "../../redux/usersReducer";
import { compose } from "redux";
import React from "react";
import { AppRootStateType } from "../../redux/redux-store";

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged = (p: number) => {
        this.props.setCurrentPageAC(p)
        this.props.getUsersTC(p, this.props.pageSize)
    }

    render() {
        return <UsersC
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollowTC}
            follow={this.props.followTC}
            isFetching={this.props.isFetching}
            toggleFollowingProgress={this.props.toggleFolowingInProgressAC}
            followingInProgress={this.props.followingInProgress}
        />
    }
}

const mapStateToProps = (state: AppRootStateType): UsersStatePropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}
export default compose<React.ComponentType>(connect<UsersStatePropsType,
    UsersDispatchPropsType, {}, AppRootStateType>(mapStateToProps,
    {followTC, unfollowTC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC,
        toggleFolowingInProgressAC, getUsersTC }))(UsersAPIComponent)

type UsersPropsType =
    UsersStatePropsType &
    UsersDispatchPropsType