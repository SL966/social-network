import s from './App.module.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import React from "react";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Nav/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route
                            path='/message'
                            element={<DialogsContainer/>}/>
                        <Route
                            path='/profile'
                            element={<ProfileContainer/>}/>
                        <Route
                            path='/news' element={<News/>}/>
                        <Route
                            path='/music' element={<Music/>}/>
                        <Route
                            path='/settings' element={<Settings/>}/>
                        <Route
                            path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;