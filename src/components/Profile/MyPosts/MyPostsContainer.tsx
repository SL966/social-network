import {addPost, changeText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage,
        massageForNewPost: state.profilePage.massageForNewPost,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost,changeText })(MyPosts);