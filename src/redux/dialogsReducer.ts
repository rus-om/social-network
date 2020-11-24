import {ActionType} from "./redux-store";

export const addTextAC = (newMessageBody: string): AddTextActionType => ({type: "ADD-TEXT", newMessageBody})

export type AddTextActionType = {
    type: "ADD-TEXT"
    newMessageBody: string
}

let initialState: DialogsPageType = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case "ADD-TEXT": {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }
        }
        default:
            return state
    }
}


export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export default dialogsReducer