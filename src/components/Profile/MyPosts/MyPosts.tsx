import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {SubmitHandler} from "redux-form/lib/reduxForm";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MypostsType = {
    addPost:(newPostTextBody: string) => void
    postData: Array<PostDataType>
}

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = React.memo( (props: MypostsType) => {
    let postsElements = props.postData.map( e => <Post message ={e.message} likesCount ={e.likesCount}/>)

    const addNewPost = (values: any) => {
        props.addPost(values.newPostTextBody)
    }

    return (
            <div className="form-group">
                My Posts
                <div>
                    New post
                </div>
                <AddPostReduxForm onSubmit={addNewPost}/>
                { postsElements }
            </div>
    )
})

type AddPostFormPropsType = {
    handleSubmit: SubmitHandler
}
const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props: AddPostFormPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Text"}
                       validate={[requiredField, maxLength10]}
                       component={Textarea}
                       name={'newPostTextBody'}
                       className="form-control"
                       rows="3"/>
                <button className="btn btn-primary">New Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddPostForm)


export default MyPosts