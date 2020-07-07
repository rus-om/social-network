import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import './MyPosts.scss';
import { addPostAC, changeNewTextAC } from "../../../redux/profileReducer";
import {ActionType} from "../../../redux/store";

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
        let text: string = props.message
        let action = addPostAC(text)
        props.dispatch(action)
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = changeNewTextAC(text)
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