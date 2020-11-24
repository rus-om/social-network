import {connect} from "react-redux";
import React from "react";
import {RouteComponentProps} from "react-router";
import axios from "axios";
import Header, {HeaderDispatchPropsType, HeaderPropsType, HeaderStatePropsType} from "./Header";
import {AppRootStateType} from "../../redux/redux-store";
import {logoutTC, setAuthUserDataAC} from "../../redux/authReducer";

export class HeaderAPIContainer extends React.Component<HeaderPropsType & RouteComponentProps> {
    componentDidMount() {
/*
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` )
            .then(response => {
                debugger
                if (response.data.resultCode === 0){
                    this.props.setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email)
                }
            })
*/
    }
    render() {
        return <Header
            setAuthUserData={this.props.setAuthUserData}
            login={this.props.login}
            isAuth={this.props.isAuth}
            logoutTC={this.props.logoutTC}
        />
    }
}

const mapDispatchToProps = (dispatch: any): HeaderDispatchPropsType => {
    return {
        setAuthUserData: (id: number, login: string, email: string) =>
            dispatch(setAuthUserDataAC(id, login, email, true, null)),
        logoutTC: () => dispatch(logoutTC()),
    }
}
const mapStateToProps = (state: AppRootStateType): HeaderStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect<HeaderStatePropsType ,
    HeaderDispatchPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)
export default HeaderContainer