import { combineReducers, } from "redux";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./users-reducer";


let rootReducer  = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer >

export const store  = configureStore({ reducer: rootReducer  });


// @ts-ignore
window.store = store

