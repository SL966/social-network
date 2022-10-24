import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {StoreType} from "./store";


let reducers = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    dialogsPage: dialogsReducer,
});

let store: StoreType = legacy_createStore(reducers);

export default store;

