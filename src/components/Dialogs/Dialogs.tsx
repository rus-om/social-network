import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, DialogsType, MessagesType} from "../../redux/state";

function Dialogs(props: {
    dialogs: DialogsType[],
    messages: MessagesType[],
    textForNewMessage: string
    dispatch: (action: ActionType) => void
}) {


    let dialogsElements = props.dialogs.map(e => <DialogItem name={e.name} id={e.id}/>)

    let messageElements = props.messages.map(e => <Message message={e.message}/>)


    let addMessage = () => {
        let action = { type: "ADD-TEXT", messageText: props.textForNewMessage  }
        props.dispatch(action)
    }

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = { type: "CHANGE-NEW-MESSAGE-TEXT", newText: e.currentTarget.value }
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