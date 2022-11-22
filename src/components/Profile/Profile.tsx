import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";


export const Profile = (props:ProfilePropsType) => {

    return <div>
        <div>
            <ProfileInfo profile={props.profile}
                         setUserProfile={props.setUserProfile}/>
            <MyPostsContainer/>
        </div>
    </div>;
}


