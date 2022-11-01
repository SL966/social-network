import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

/*type isActiv = {
    isActive: boolean;
}*/

/*const setActive = ({ isActive }) => isActive ? s.active : '' ;*/


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
        <div className={s.visual_nav}>
            <div className={s.cubespinner}>
                <div className={s.face1}>Profile</div>
                <div className={s.face2}>Messages</div>
                <div className={s.face3}>News</div>
                <div className={s.face4}>Music</div>
                <div className={s.face5}>Settings</div>
                <div className={s.face6}>
                    <div>
                        <img className={s.rotate}
                             src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                             alt={'logo'}
                        />
                    </div>
                </div>
            </div>
        </div>
    </nav>
        ;
}

export default Nav;