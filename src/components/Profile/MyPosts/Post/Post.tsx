import s from './Post.module.css'
import {PostsType} from "../../../../redux/profile-reducer";
import React from "react";

const Post: React.FC<PostsType> = ({message,likesCount}) => {
    return (
        <div>
            <div className={s.itemm}>
                <img alt={'logo'}
                    src={'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png'}/>
                {message}
            </div>
            <span>Like {likesCount}</span>
        </div>);
}

export default Post;