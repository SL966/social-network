

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    massageForNewPost: string
    posts: Array<PostsType>
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

/*export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}*/


export type ProfileActionType = ReturnType<typeof addPost> |
    ReturnType<typeof changeText> | ReturnType<typeof setUserProfile>

export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostsType>,
    massageForNewPost: '',
    profile: null as ProfileType | null

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
        case 'UPDATE_NEW_POST_TEXT' : {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

};



export const addPost = (postText: string) => ({type: 'ADD-POST-MESSAGE',postText: postText})as const
export const changeText = (newText: string) => ({type: 'CHANGE-TEXT', newText: newText }) as const
export const setUserProfile = (profile:any) => ({type: 'UPDATE_NEW_POST_TEXT', profile }) as const


