import React from 'react';
import Post from "./Post/Post";
import './MyPosts.scss';
import {PostDataType} from "../../../redux/state";

function MyPosts(props: {postData: PostDataType[]}) {
/*
    let postData = [
        {id: "1", message: "Hey, how are you?", likesCount: 122},
        {id: "2", message: "It's my first post", likesCount: 20},
    ]*/

    let postsElements = props.postData.map( e => <Post message ={e.message} likesCount ={e.likesCount}/>)

    return (
            <div className="form-group">
                My Posts
                <div>
                    New post
                </div>
                <div>
                    <textarea className="form-control" id="exampleFormControlTextarea1" cols={200} rows={4} ></textarea>
                    <button className="btn btn-primary" >New Post</button>
                </div>
                { postsElements }
            </div>
    )

}

export default MyPosts