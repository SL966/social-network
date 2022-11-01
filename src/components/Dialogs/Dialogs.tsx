import DialogsItems from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css'
import React, {ChangeEvent} from "react";
import {InitialStateType} from "../../redux/dialogs-reducer";

type DialogPropsType = {
    dialogs: InitialStateType
    onNewMessageChange: (body: string) => void
    onSendMessageClick: (action: string) => void
}

const Dialogs: React.FC<DialogPropsType> = (props ) => {
    //console.log('fere', props)

    let dialogElement = props.dialogs.dialogs.map(d => (
        <DialogsItems key={d.id} name={d.name} id={d.id}/>)
    );
    let messageElement = props.dialogs.messages.map(m => (
        <Message key={m.id} message={m.message} id={m.id}/>)
    );
    let newMessageBody = props.dialogs.newMessageBody;

    let onSendMessageClick = () => {

        props.onSendMessageClick(props.dialogs.newMessageBody)
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.onNewMessageChange(e.currentTarget.value);
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
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button className={s.button_send_message}
                                onClick={onSendMessageClick}
                        >Send
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;