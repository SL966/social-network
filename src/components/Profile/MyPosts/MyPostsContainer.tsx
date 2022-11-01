import {addPostAC, changeTextAC, ProfileStateType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: ProfileStateType) => {
    return {
        posts: state.profilePage,
        massageForNewPost: state.profilePage.massageForNewPost,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
        newChangeTextHandler: (newText: string) => {
            dispatch(changeTextAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);