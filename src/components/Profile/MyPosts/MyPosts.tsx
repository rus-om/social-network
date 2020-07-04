import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import './MyPosts.scss';
import {ActionType} from "../../../redux/state";

type MypostsType = {
    postData: Array<PostDataType>
    dispatch: (action: ActionType) => void
    message: string
}

type PostDataType = {
    id: number
    message: string
    likesCount: number
}



function MyPosts(props: MypostsType) {

    let postsElements = props.postData.map( e => <Post message ={e.message} likesCount ={e.likesCount}/>)

    let btnOnClick = () => {
        let action = { type: "ADD-POST",  postText: props.message }
        props.dispatch(action)
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = { type: "CHANGE-NEW-TEXT", newText: e.currentTarget.value }
        props.dispatch(action)
    }

    return (
            <div className="form-group">
                My Posts
                <div>
                    New post
                </div>
                <div>
                    <textarea className="form-control"
                              id="exampleFormControlTextarea1"
                              cols={200} rows={4}
                    value={props.message}
                    onChange={onPostChangeHandler}>
                    </textarea>
                    <button className="btn btn-primary" onClick={btnOnClick}>New Post</button>
                </div>
                { postsElements }
            </div>
    )
}

export default MyPosts