import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {reduxForm, Field} from "redux-form";
import {SubmitHandler} from "redux-form/lib/reduxForm";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import { DialogsType, MessagesType } from "../../redux/dialogsReducer";

export type DialogsStatePropsType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
}

export type DialogsDispatchPropsType = {
    addMessage: (newMessageBody: string) => void,
}

export type DialogsPropsType = DialogsStatePropsType & DialogsDispatchPropsType

function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogs.map(e => <DialogItem name={e.name} id={e.id}/>)
    let messageElements = props.messages.map(e => <Message message={e.message}/>)

    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessageBody)
    }

    // @ts-ignore
    if (!props.isAuth)
        return <Redirect to={"/login"}/>
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <AddmessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

type AddMessageFormPropsType ={
    handleSubmit: SubmitHandler
}

const maxLength30 = maxLengthCreator(30)

const AddMessageForm = (props: AddMessageFormPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"}
                       component={Textarea}
                       validate={[requiredField, maxLength30]}
                       name={'newMessageBody'}/>
            </div>
            <div>
                <button className="btn btn-primary">New Post</button>
            </div>
        </form>
    )
}

const AddmessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs