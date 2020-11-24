import { connect } from "react-redux";
import { compose } from "redux";
import React from "react";
import Profile, { ProfileStatePropsType, ProfileDispatchPropsType, ProfilePropsType } from "./Profile";
import {
    getStatusTC, getUserProfileTC,
    setUserProfileAC, updatePhotoTC,
    updateStatusTC
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {AppRootStateType} from "../../redux/redux-store";

type MapPropsType = ReturnType<typeof mapStateToProps>

export class ProfileAPIContainer extends React.Component<ProfilePropsType & RouteComponentProps & MapPropsType> {
    refreshProfile=()=>{
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        // @ts-ignore
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }
    componentDidMount() {
        this.refreshProfile()
     }
    componentDidUpdate(prevProps: Readonly<ProfilePropsType & RouteComponentProps & MapPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()
     }

    render() {
        return <Profile
            profile={this.props.profile}
            statusText={this.props.statusText}
            setUserProfileAC={this.props.setUserProfileAC}
            isAuth={this.props.isAuth}
            getStatusTC={this.props.getStatusTC}
            updateStatusTC={this.props.updateStatusTC}
            updatePhotoTC={this.props.updatePhotoTC}
            isOwner={!this.props.match.params.userId}
        />
    }
}
const mapStateToProps = (state: AppRootStateType): any => {
    return {
        profile: state.profilePage.profile,
        statusText: state.profilePage.statusText,
        userId: state.auth.id
    }
}
/*
const mapDispatchToProps = (dispatch: Dispatch, state: AppRootStateType): ProfileDispatchPropsType => {
    return {
        setUserProfile: (profile: ProfileType) => dispatch(setUserProfileAC(profile)),
        getStatusTC: (userId: number) => dispatch(getStatusTC(userId)),
        updateStatusTC: (status: string) => dispatch(updateStatusTC(status))
    }
}*/
//let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer)

export default compose<React.ComponentType>(connect<ProfileStatePropsType, ProfileDispatchPropsType,
    {}, AppRootStateType>(mapStateToProps,
    { getUserProfileTC ,setUserProfileAC, getStatusTC, updateStatusTC, updatePhotoTC}),withRouter)(ProfileAPIContainer)