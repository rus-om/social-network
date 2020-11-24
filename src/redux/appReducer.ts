import {setAuthUserDataTC} from "./authReducer";
import { ActionType } from "./redux-store";

export const initialiseSuccessAC = (): SetInitializeActionType  => {
    return ({type: "SET-INITIALIZE"})
}

export const initializeAppTC = () => (dispatch: any) => {
    const promise1 = dispatch(setAuthUserDataTC())
    Promise.all([promise1]).then(() => dispatch(initialiseSuccessAC()))
}

let initialState: AppReducerInitialStateType = {
    initialize: false
}

const appReducer = (state: AppReducerInitialStateType = initialState, action: ActionType): AppReducerInitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZE": {
            return ({...state, initialize: true})
        }
        default:
            return state
    }
}

export type AppReducerInitialStateType = {
    initialize: boolean
}

export type SetInitializeActionType = {
    type: "SET-INITIALIZE"
}


export default appReducer