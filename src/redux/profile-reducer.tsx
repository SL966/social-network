

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    massageForNewPost: string
    posts: Array<PostsType>
}
export type ProfileStateType = {
    profilePage: ProfilePageType
}

export type ProfileActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeTextAC>

export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostsType>,
    massageForNewPost: '',
}

export const profileReducer = (state = initialState,
                               action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST-MESSAGE":
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.massageForNewPost,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.massageForNewPost = ''
            return stateCopy;
        case 'CHANGE-TEXT': {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.massageForNewPost = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

};



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

