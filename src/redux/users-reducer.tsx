


export type UserType = {
    id: number
    photos: string,
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

export type UserLocationType = {
    city: string
    country: string
}


export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [ ] as  Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,

}

export type UsersActionType = ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |  ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching>

export const usersReducer = (state = initialState,
                             action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE' : {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT' : {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE_IS_FETCHING' : {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

};


export const follow = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', count:totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching}) as const


