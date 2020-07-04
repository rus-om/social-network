import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import {RootStateType, ActionType} from "./redux/state";

type AppPropsType = {
    dispatch: (action: ActionType) => void
    state: RootStateType
    addText: (messageText: string) => void
    changeNewMessageText : (newText: string) => void
}

//test commit
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Navbar/>
                <Header/>
                <div>
                    <Route path="/profile" render={() => <Profile postData={props.state.profilePage.postData}
                                                                  dispatch={props.dispatch}
                                                                  message={props.state.profilePage.messageForNewPost}
                                                                  />}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}
                                                                  addText={props.addText}
                                                                  textForNewMessage={props.state.dialogsPage.textForNewMessage}
                                                                  changeNewMessageText={props.changeNewMessageText}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
