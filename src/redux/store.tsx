import {addPostAC, profileReducer,changeTextAC} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {updateNewMessageBodyAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";

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

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    massageForNewPost: string
    posts: Array<PostsType>

};
export type SidebarType = {};

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
};


export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTyp) => void
};


export type ActionsTyp = ReturnType<typeof addPostAC> | ReturnType<typeof changeTextAC>
    | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            massageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },


    dispatch(action) {
        console.log('dispatch')
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._onChange();
    },

    _onChange() {
        console.log('_onChange')
    },
    subscribe(callback) {
        console.log('subscribe')
        this._onChange = callback
    },
    getState() {
        console.log('getSate')
        return this._state;
    }
};



