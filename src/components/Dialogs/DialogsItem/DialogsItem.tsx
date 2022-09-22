import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../state";
import React from "react";



const DialogsItem = (props:DialogsType) => {

   /* let messageElementRef = React.createRef<HTMLTextAreaElement>()*/

    /*let addMessage = () => {
        alert(messageElementRef.current?.value)
    }*/

    let path = '/message/' + props.id;
    return <div>
        <NavLink to={path}>{props.name}</NavLink>
        {/*<textarea ref={messageElementRef}></textarea>
        <button onClick={addMessage}>Add message</button>*/}
    </div>
}


export default DialogsItem;