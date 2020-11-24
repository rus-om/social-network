import { ActionType } from "./redux-store"

let initialState: SidebarType = {}

const sidebarReducer = (state: SidebarType = initialState, action: ActionType) => {
    return state
}

export type SidebarType = {}
export default sidebarReducer