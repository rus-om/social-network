import { addTextAC } from "../../redux/dialogsReducer";
import Dialogs, {DialogsDispatchPropsType, DialogsStatePropsType} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";

const mapStateToProps = (state: AppRootStateType): DialogsStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch, state: any): DialogsDispatchPropsType => {
    return {
        addMessage: (newMessageBody: string) => {dispatch(addTextAC(newMessageBody))},
    }
}

//let AuthRedirectComponent = withAuthRedirect(Dialogs)
//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default compose<React.ComponentType>(connect<DialogsStatePropsType, DialogsDispatchPropsType, {}, AppRootStateType>(mapStateToProps,
    mapDispatchToProps),withAuthRedirect)(Dialogs)