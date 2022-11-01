import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/dialogs-reducer";
import React from "react";

const DialogsItem = (props: DialogsType) => {

    let path = '/message/' + props.id;
    return <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogsItem;