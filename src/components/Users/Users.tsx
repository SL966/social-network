import React from 'react';
import s from "./Users.module.scss";
import usersPhoto from "../../images/avatar.png";
import {mapStateToPropsType, UsersPropsType} from "./UsersContainer";
import { NavLink } from 'react-router-dom';


type UsersProps = {
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType & UsersProps & mapStateToPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount
    /*(все количество пользователей с сервака)102*/ / props.pageSize);

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <>
        <div className={s.usersPage}>
            <div className={s.pagesNumber}>Pages number</div>
            {pages.map(p => {

                let stylePageNumber = props.currentPage === p && s.selectedPage

                return <span key={p}
                             className={stylePageNumber.toString()}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}> {p}` </span>
            })}

        </div>
        <div className={s.usersMessages}>
            {
                props.usersPage.users.map(u =>
                    <div key={u.id}>
                    <span>
                      <div>
                          <NavLink to={'/profile' }>
                           <img alt={'avatar'} className={s.user_avatar}
                                src={u.photos ! = null ? u.photos : usersPhoto}/>
                              </NavLink>
                      </div>
                     <div> {u.followed
                         ? <button onClick={() => {
                             props.unfollow(u.id)
                         }}>Unfollow</button>
                         : <button onClick={() => {
                             props.follow(u.id)
                         }}>Follow</button>}

                      </div>
                    </span>
                        <span>
                                    <span>
                                      <div>{u.name}</div>
                                      <div>{u.status}</div>
                                    </span>
                                    <span>
                                      <div>{'u.location.country'}</div>
                                      <div>{'u.location.city'}</div>
                                    </span>
                                </span>
                    </div>)
            }
        </div>
    </>

};

export default Users;