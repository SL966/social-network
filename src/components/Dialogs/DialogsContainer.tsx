import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";



let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage
    }
}


export const DialogsContainer = connect(mapStateToProps,{
    updateNewMessageBody,sendMessage})(Dialogs);









