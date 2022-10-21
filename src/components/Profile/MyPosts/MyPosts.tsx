import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTyp,PostsType} from "../../../redux/state";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import {changeTextAC} from "../../../redux/profile-reducer";


type ProfilePageTypeProps = {
    posts: Array<PostsType>
    messageForMessage: string
    dispatch: (action: ActionsTyp) => void
}


export const MyPosts = (props: ProfilePageTypeProps) => {

    let PostsElement = props.posts.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))


    let addPost = () => {

        // props.addProfileType(props.messageForMessage)  //Прокинули  dispatch
        props.dispatch(addPostAC(props.messageForMessage))
    };

    const newChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        //props.changeNewTextCallback(e.currentTarget.value)
        props.dispatch(changeTextAC(e.currentTarget.value))

    };

    const keyDownButton = (e: KeyboardEvent<HTMLButtonElement>) => {
        addPost()
        if (e.key !== undefined) { // не работает !!! исправить
            addPost();
        }
    }

    return (
        <div>
            <div>
                <div className={s.myPosts}>
                    <h3>My posts</h3>
                    <div>
                        <textarea className={s.textarea}
                                  value={props.messageForMessage}
                                  onChange={newChangeTextHandler}/>
                    </div>
                    <div>
                        <button className={s.buttonAdd} onClick={addPost}
                                onKeyDown={keyDownButton}>Add post
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