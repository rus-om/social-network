import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string,
    id: number,
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={classes.dialog}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

export default DialogItem