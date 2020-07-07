import {ActionType, DialogsPageType, MessagesType, PostDataType, RootStateType} from "./store";

export const changeNewMessageTextAC = (text: string) => ({type: CHANGE_NEW_MESSAGE_TEXT, newText: text})
export const addTextAC = (text: string) => ({type: ADD_TEXT, messageText: text})


const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT"
const ADD_TEXT = "ADD-TEXT"

let initialState: DialogsPageType = {
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

}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_TEXT: {
            let newMessage: MessagesType = {id: 4, message: action.messageText}
            state.messages.push(newMessage)
            state.textForNewMessage = ""
            return state
        }
        case CHANGE_NEW_MESSAGE_TEXT: {
            state.textForNewMessage = action.newText
            return state

        }
        default: return state
    }
}

export default dialogsReducer