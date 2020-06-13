import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

function Dialogs(props: {dialogs: DialogsType[], messages: MessagesType[]}) {


    let dialogsElements = props.dialogs.map(e => <DialogItem name={e.name} id={e.id}/>)

    let messageElements = props.messages.map(e => <Message message={e.message}/>)

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )

}

export default Dialogs