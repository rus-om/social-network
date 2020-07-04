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

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    textForNewMessage: string
}

type SidebarType = {}


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
    addPost(postText: string) {
        let newPost: PostDataType = {
            id: 5,
            message: postText,
            likesCount: 0,
        }
        this._state.profilePage.postData.push(newPost)
        renderThree(this._state)
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        renderThree(this._state)
    },
    addText(messageText: string) {
        let newMessage: MessagesType = {
            id: 4, message: messageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        renderThree(this._state)
    },
    changeNewMessageText(newText: string) {
        this._state.dialogsPage.textForNewMessage = newText
        renderThree(this._state)
    },
    subscribe(observer: (state: RootStateType) => void) {
        renderThree = observer
    },
    dispatch(action: ActionType) {
        if (action.type === "ADD-POST") {
            let newPost: PostDataType = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            }
            this._state.profilePage.postData.push(newPost)
            renderThree(this._state)
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText
            renderThree(this._state)
        }

    }
}

export default store