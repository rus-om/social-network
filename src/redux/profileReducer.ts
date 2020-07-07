import {MessagesType, PostDataType, ActionType, ProfilePageType} from "./store";

export const addPostAC = (text: string) => ({type: ADD_POST, postText: text})
export const changeNewTextAC = (text: string) => ({type: CHANGE_NEW_TEXT, newText: text})

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

let initialState: ProfilePageType = {
    messageForNewPost: "",
    postData: [
        {id: 1, message: "Hey, how are you?", likesCount: 122},
        {id: 2, message: "It's my first post", likesCount: 20},
    ]
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostDataType = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            }
            state.postData.push(newPost)
            state.messageForNewPost = ""
            return state
        }
        case CHANGE_NEW_TEXT: {
            state.messageForNewPost = action.newText
            return state
        }
        default:
            return state
    }
}

export default profileReducer