import React from 'react';
import {Redirect} from "react-router";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: AppRootStateType): any => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component {
        render() {
            // @ts-ignore
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }


// @ts-ignore
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}