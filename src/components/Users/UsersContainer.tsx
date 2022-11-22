import {connect} from "react-redux";
import {
    follow,
    InitialStateType,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


export type mapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

 type mapDispatchToPropsType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {

        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   pageSize={this.props.pageSize}
                   setCurrentPage={this.onPageChanged}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setUsers={this.props.setUsers}
                   totalUsersCount={this.props.totalUsersCount}
                   unfollow={this.props.unfollow}
                   usersPage={this.props.usersPage}
                   toggleIsFetching={this.props.toggleIsFetching}/>
        </>
    }
}

function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
    }
}



export default connect(mapStateToProps, {
     follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching
})
(UsersContainer);