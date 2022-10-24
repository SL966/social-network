import {ActionsTyp} from "./store";


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

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state = initialState, action: ActionsTyp) => {
    console.log('dialogsReducer')
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
