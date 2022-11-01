import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {DialogsStateType} from '../../redux/dialogs-reducer'
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";



let mapStateToProps = (state: DialogsStateType) => {
    return {
        dialogs: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any ) => {
    return {
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        onSendMessageClick: (body: string) => {
            dispatch(sendMessageAC(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,
    mapDispatchToProps)(Dialogs);









