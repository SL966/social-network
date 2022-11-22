import s from './../Dialogs.module.scss'
import {MessagesType} from "../../../redux/dialogs-reducer";
import React from "react";

const Message: React.FC<MessagesType> = (
    {
        message
    }) => {
    return <div className={s.message}>
        {message}
    </div>
}


export default Message;