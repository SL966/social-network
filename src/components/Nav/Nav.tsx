import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.visual_nav}>
            <div className={s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
        </div>
        <div className={s.visual_nav}>
            <div className={s.item}>
                <NavLink to='/message'>Messages</NavLink>
            </div>
        </div>
        <div className={s.visual_nav}>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
        </div>
        <div className={s.visual_nav}>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
        </div>
        <div className={s.visual_nav}>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </div>
        <div className={s.cube_spinner}>
            <div className={s.face1}><NavLink className={s.cube_spinner_face} to='/profile'>Profile</NavLink></div>
            <div className={s.face2}><NavLink className={s.cube_spinner_face} to='/message'>Messages</NavLink></div>
            <div className={s.face3}><NavLink className={s.cube_spinner_face} to='/news'>News</NavLink></div>
            <div className={s.face4}><NavLink className={s.cube_spinner_face} to='/music'>Music</NavLink></div>
            <div className={s.face5}><NavLink className={s.cube_spinner_face} to='/settings'>Settings</NavLink></div>
            <div className={s.face6}>
                <div>
                    <a className={s.cube_spinner_face} href='https://reactdev.ru/'>
                        <img className={s.rotate}
                             src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                             alt={'logo'}
                        /></a>
                </div>
            </div>
        </div>

    </nav>
        ;
}

export default Nav;