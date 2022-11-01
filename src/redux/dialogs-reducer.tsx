
export type MessagesType = {
    id: number
    message: string

}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
     dialogs: Array<DialogsType>
     newMessageBody: string
}
export type DialogsStateType = {
    dialogsPage: DialogsPageType
}

export type DialogActionType = ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type InitialStateType = typeof initialState

let initialState = {

    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogsType>,

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessagesType>,
    newMessageBody: '',
}

export const dialogsReducer = (state = initialState,
                               action: DialogActionType):InitialStateType => {

    let stateCopy = {
        ...state,
        messages: [...state.messages]
    };


    switch (action.type) {
        case  'UPDATE-NEW-MESSAGE-BODY':
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: new Date().getTime(), message: body});
            return stateCopy;
        default:
            return state;
    }
};


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