import s from './Post.module.css'
import {PostsType} from "../../../../state";


const Post = (props:PostsType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src={'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png'}/>
                {props.message}
            </div>
            <span>Like {props.likesCount}</span>
        </div>);
}

export default Post;