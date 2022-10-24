import {ActionsTyp, PostsType} from "./store";

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

let initialState = {
        massageForNewPost: '',
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    }

export const profileReducer = (state = initialState, action: ActionsTyp) => {
   console.log('profileReducer')
    switch (action.type) {
        case "ADD-POST-MESSAGE":
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.massageForNewPost = '';
            return state;
        case 'CHANGE-TEXT':
            state.massageForNewPost = action.newText;
            return state;
        default:
            return state;
    }

};

