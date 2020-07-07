import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import { addTextAC, changeNewMessageTextAC } from "../../redux/dialogsReducer";
import {DialogsType, MessagesType, ActionType} from "../../redux/store";

function Dialogs(props: {
    dialogs: DialogsType[],
    messages: MessagesType[],
    textForNewMessage: string
    dispatch: (action: ActionType) => void
}) {


    let dialogsElements = props.dialogs.map(e => <DialogItem name={e.name} id={e.id}/>)

    let messageElements = props.messages.map(e => <Message message={e.message}/>)


    let addMessage = () => {
        let text = props.textForNewMessage
        let action = addTextAC(text)
        props.dispatch(action)
    }

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = changeNewMessageTextAC(text)
        props.dispatch(action)
    }

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div><textarea className="form-control"
                           id="exampleFormControlTextarea1"
                           cols={200} rows={4}
                           value={props.textForNewMessage}
            onChange={onChangeMessageTextHandler}>
            </textarea>
            </div>
            <div>
                <button className="btn btn-primary" onClick={addMessage}>New Post</button>
            </div>
        </div>
    )

}

export default Dialogs