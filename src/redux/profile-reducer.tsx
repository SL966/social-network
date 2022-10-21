import {ActionsTyp, PostsType} from "./state";

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

export const profileReducer = (state: any, action: ActionsTyp) => {
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

