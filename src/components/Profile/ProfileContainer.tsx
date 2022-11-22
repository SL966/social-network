import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from "./WithRouter";

export type mapStateToPropsType = {
    profile: any
}

export type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <div>

            <div>
                <Profile {...this.props} profile={this.props.profile} setUserProfile={this.props.setUserProfile}/>
            </div>
        </div>;
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})
withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

