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
    //changeText: (newText: string) => void
    //addPost: (postText: string) => void
    _onChange: () => void
    _subscribe: (callback: () => void) => void
    getSate: () => RootStateType
    dispatch: (action: ActionsTyp) => void
};


export type ActionsTyp = ReturnType<typeof addPostAC> | ReturnType<typeof changeTextAC>
    | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>


export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST-MESSAGE',
        postText: postText
    } as const
};

export const changeTextAC = (newText: string) => {
    return {
        type: 'CHANGE-TEXT',
        newText: newText
    } as const
};

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
};

export const sendMessageAC = (body: string) => {
    return {
        type: 'SEND-MESSAGE',
        body: body
    } as const
};

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

    /*changeText(newText: string) {
        this._state.profilePage.massageForNewPost = newText;
        this._onChange();
    },
    addPost(postText: string) {

        const newPost: PostsType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.massageForNewPost = '';
        this._onChange();
    },*/

    dispatch(action) {
        if (action.type === 'ADD-POST-MESSAGE') {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.massageForNewPost = '';
            this._onChange();
        } else if (action.type === 'CHANGE-TEXT') {
            this._state.profilePage.massageForNewPost = action.newText;
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange();
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: new Date().getTime(), message: body});
            this._onChange();
        }
    },

    _onChange() {
        console.log('state changed')
    },
    _subscribe(callback) {
        this._onChange = callback
    },
    getSate() {
        return this._state;
    }
};


