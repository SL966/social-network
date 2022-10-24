import s from './App.module.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {StoreType} from "./redux/store";
import React from "react";

type PropsType = {
    store: StoreType
}


const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Nav/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route
                            path='/message'
                            element={<Dialogs dialogs={state.dialogsPage}
                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route
                            path='/profile'
                            element={<Profile profile={state.profilePage}
                                              massage={state.profilePage.massageForNewPost}
                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route
                            path='/news' element={<News/>}/>
                        <Route
                            path='/music' element={<Music/>}/>
                        <Route
                            path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;