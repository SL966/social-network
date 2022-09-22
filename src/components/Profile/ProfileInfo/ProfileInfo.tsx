import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div>
            <img className={s.image} src='https://piligrim.ua/wp-content/uploads/2021/10/haram_beach-1024x614.jpg'/>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    </div>;
}

export default ProfileInfo;