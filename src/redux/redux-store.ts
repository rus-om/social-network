import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer, {AddPostActionType, ChangeNewTextActionType, setStatusActionType,
    setUserProfileActionType, UpdatePhotoConfirmActionType} from "./profileReducer";
import dialogsReducer, {AddTextActionType} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {
    setUsersActionType,
    setCurrentPageActionType,
    setFetchingActionType,
    setTotalUsersCountActionType,
    toggleFolowingInProgressActionType
} from "./usersReducer";
import authReducer, {SetAuthUserDataActionType, SetCaptchaUrlActionType} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer, {SetInitializeActionType} from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk))
)

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store


export type ActionType =
    | AddPostActionType
    | ChangeNewTextActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | setFetchingActionType
    | setUserProfileActionType
    | AddTextActionType
    | SetAuthUserDataActionType
    | toggleFolowingInProgressActionType
    | setStatusActionType
    | SetInitializeActionType
    | UpdatePhotoConfirmActionType
    | SetCaptchaUrlActionType


export type followActionType = {
    type: "FOLLOW"
    id: number
}
export type unfollowActionType = {
    type: "UNFOLLOW"
    id: number
}

export default store