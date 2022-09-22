import s from './../Dialogs.module.css'
import {MessagesType} from "../../../state";






const Message = (props:MessagesType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}



export default Message;