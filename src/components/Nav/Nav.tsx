import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

/*type isActiv = {
    isActive: boolean;
}*/

/*const setActive = ({ isActive }) => isActive ? s.active : '' ;*/

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/message'>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news'>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
    </nav>;
}

export default Nav;