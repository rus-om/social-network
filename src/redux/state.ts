export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ProfilePageType = {
    postData: Array <PostDataType>
}

type DialogsPageType = {
    dialogs: Array <DialogsType>
    messages: Array <MessagesType>
}

type SidebarType = {

}


export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType= {
    id: number
    message: string
}

export let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, message: "Hey, how are you?", likesCount: 122},
            {id: 2, message: "It's my first post", likesCount: 20},
        ]
    },
    dialogsPage: {
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
}

export default state