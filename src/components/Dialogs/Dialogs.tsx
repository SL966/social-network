import DialogsItems from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

import {ActionsTyp, DialogsPageType} from '../../redux/state'
import s from './Dialogs.module.css'
import {ChangeEvent} from "react";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogPropsType = {
    dialogs: DialogsPageType
    dispatch: (action: ActionsTyp) => void
}

const Dialogs = (props: DialogPropsType) => {
    let dialogElement = props.dialogs.dialogs.map(d => (<DialogsItems key={d.id} name={d.name} id={d.id}/>));
    let messageElement = props.dialogs.messages.map(m => (<Message key={m.id} message={m.message} id={m.id}/>));
    let newMessageBody = props.dialogs.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC(props.dialogs.newMessageBody))
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
props.dispatch(updateNewMessageBodyAC(body)); // через let body , другим способом чем newChangeTextHandler(MyPosts).
    }






    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>{dialogElement}</div>
            </div>
            <div className={s.messages}>
                <div>
                    {messageElement}
                </div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={ onNewMessageChange }
                                   placeholder={'Enter your message'}></textarea></div>
                    <div><button onClick={ onSendMessageClick }
                    >Send</button></div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;