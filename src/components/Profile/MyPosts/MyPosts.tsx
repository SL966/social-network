import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {InitialStateType} from "../../../redux/profile-reducer";
import React, {ChangeEvent} from "react";

export type ProfilePageTypeProps = {
    posts: InitialStateType
    massageForNewPost: string
    changeText: (newText: string) => void
    addPost: (action: string) => void
}

export const MyPosts: React.FC<ProfilePageTypeProps> = (props) => {
    let PostsElement = props.posts.posts.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))

    let addPost = () => {
        props.addPost(props.massageForNewPost)
    };

    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeText(e.currentTarget.value)
    };

    return (
        <div>
            <div>
                <div className={s.myPosts}>
                    <h3 className={s.hit_the_floor}>My posts</h3>
                    <div>
                        <textarea className={s.textarea}
                                  value={props.massageForNewPost}
                                  onChange={changeText}
                                  placeholder={'Enter your text'}/>
                    </div>
                    <div>
                        <button className={s.buttonAdd}
                                onClick={addPost}
                        ><span>Add post</span>
                        </button>
                    </div>
                </div>
                <div className={s.posts}>
                    {PostsElement}
                </div>
            </div>
        </div>);
}

export default MyPosts;