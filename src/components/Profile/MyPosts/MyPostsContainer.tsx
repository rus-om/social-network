import './MyPosts.scss';
import MyPosts from './MyPosts';
import {addPostAC, AddPostActionType, ChangeNewTextActionType} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import { AppRootStateType } from '../../../redux/redux-store';

type MypostsContainerType = {
    store: AppRootStateType
}
    const mapDispatchToProps = (dispatch: (action: AddPostActionType | ChangeNewTextActionType ) => void) => {
        return {
            addPost: (newPostTextBody: string) => dispatch(addPostAC(newPostTextBody)),
        }
    }

    const mapStateToProps = (state: AppRootStateType) => {
        return {
            postData: state.profilePage.postData,
        }
    }

    const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer