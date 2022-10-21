import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTyp, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profile: ProfilePageType
    //addProfile: (postText: string) => void  //Прокинули  dispatch
    massage: string
    //changeText: (newText: string) => void  //Прокинули  dispatch
    dispatch: (action: ActionsTyp) => void
}

const Profile = (props: ProfilePropsType) => {

    return <div>
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profile.posts}
                     //addProfileType={props.addProfile}
                     messageForMessage={props.profile.massageForNewPost}
                     //changeNewTextCallback={props.changeText}
                     dispatch={props.dispatch.bind(props.dispatch)}/>
        </div>
    </div>;
}

export default Profile;