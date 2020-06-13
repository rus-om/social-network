import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
    message: string,
    likesCount: number
}

function Post(props: PostPropsType) {
    return (
                <div className={classes.posts}>
                    <div className={classes.item}>
                        <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg" alt="avatar"/>
                        {props.message}<div><span className={classes.item}>{props.likesCount} like</span></div>
                    </div>

                </div>
    )

}

export default Post