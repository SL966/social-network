import s from './ProfileInfo.module.css'
import {Smoky} from "../../SmokyEffect/Smoky";


const ProfileInfo = () => {
    return <div>
        <div>
            <img className={s.image} alt={'icon'}
                 src='https://piligrim.ua/wp-content/uploads/2021/10/haram_beach-1024x614.jpg'/>
            <div >
                <Smoky/>
            </div>
        </div>
    </div>
}

export default ProfileInfo;