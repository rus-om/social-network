import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

function Dialogs(props: {
    dialogs: DialogsType[],
    messages: MessagesType[],
    addText: (messageText: string) => void,
    textForNewMessage: string
    changeNewMessageText : (newText: string) => void
}) {


    let dialogsElements = props.dialogs.map(e => <DialogItem name={e.name} id={e.id}/>)

    let messageElements = props.messages.map(e => <Message message={e.message}/>)


    let addMessage = () => {
        props.addText(props.textForNewMessage)
    }

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => { props.changeNewMessageText(e.currentTarget.value)}

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