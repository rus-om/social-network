import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { HeaderFuncContainer } from './components/Header/HeaderFuncContainer';
import Login from "./components/Login/Login";
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";
import {initializeAppTC} from "./redux/appReducer";
import {LoadingSpinner} from "./components/Users/LoadingSpinner";
import {withRouter} from "react-router";

type AppPropsType = AppStatePropsType & AppDispatchPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialize) {
            return <LoadingSpinner/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Navbar/>
                    <HeaderFuncContainer/>
                    <div>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): AppStatePropsType => {
    return {
        initialize: state.app.initialize,
    }
}

const mapDispatchToProps = (dispatch: any): AppDispatchPropsType => {
    return {
        initializeAppTC: () => dispatch(initializeAppTC()),
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(App)

type AppStatePropsType = {
    initialize: boolean
}
type AppDispatchPropsType = {
    initializeAppTC: () => void
}