import {ActionsTyp} from "./state";


export const sendMessageAC = (body: string) => {
    return {
        type: 'SEND-MESSAGE',
        body: body
    } as const
};

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
};

export const dialogsReducer = (state: any, action: ActionsTyp) => {
    switch (action.type) {
        case  'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: new Date().getTime(), message: body});
            return state;
        default:
            return state;
    }
};
