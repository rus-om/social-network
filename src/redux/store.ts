import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let renderThree = (state: RootStateType) => {
    console.log("123")
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ProfilePageType = {
    postData: Array<PostDataType>
    messageForNewPost: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    textForNewMessage: string
}

export type SidebarType = {}


export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    addPost: (postText: string) => void
    changeNewText: (newText: string) => void
    addText: (messageText: string) => void
    changeNewMessageText: (newText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
}

export type ActionType = {
    type: string
    postText?: any //ИСПРАВИТЬ!!!
    newText?: any //ИСПРАВИТЬ!!!
    messageText?: any //ИСПРАВИТЬ!!!
}

let store = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            postData: [
                {id: 1, message: "Hey, how are you?", likesCount: 122},
                {id: 2, message: "It's my first post", likesCount: 20},
            ]
        },
        dialogsPage: {
            textForNewMessage: "",
            dialogs: [
                {id: 1, name: "ALexey"},
                {id: 2, name: "Aleftin"},
                {id: 3, name: "Afonya"},
                {id: 4, name: "Alexandr"},
                {id: 5, name: "Andrey"},
            ],
            messages: [
                {id: 1, message: "Privet"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Shalom"},
            ]
        },
        sidebar: {},
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        renderThree = observer
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        renderThree(this._state)
    }
}

export default store