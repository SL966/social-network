import s from './ProfileInfo.module.css'
import {Smoky} from "../../SmokyEffect/Smoky";
import {ProfilePropsType} from "../ProfileContainer";
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img className={s.image} alt={'icon'}
                 src='https://piligrim.ua/wp-content/uploads/2021/10/haram_beach-1024x614.jpg'/>
            <div>
                <Smoky/>
            </div>
            <div>
                <img src={props.profile.photos.small}/>
                <div>Обо мне: {props.profile.aboutMe}</div>
                <div>Git address: {props.profile.contacts.github}</div>
            </div>
        </div>
    </div>
}

export default ProfileInfo;