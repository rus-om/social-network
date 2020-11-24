import React from "react";
import axios from "axios";
import userPhoro from "../../assets/images/userPhoto.png";
import {usersArrayType} from "../../redux/usersReducer";

export type UsersStatePropsType = {
    users: Array<usersArrayType>
}

export type UsersDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<usersArrayType>) => void
}

export type UsersPropsType = UsersStatePropsType & UsersDispatchPropsType


function Users(props: UsersPropsType) {

    const getUsers = () => {
        if(props.users.length === 0)
    {axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
}
    return (
        <div>
            <div><span className={"selctedPage"}>14564</span></div>
            <button onClick={getUsers}>get users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.urlPhoto ? u.urlPhoto : userPhoro} alt="avatar"/></div>
                    <div>
                        {u.followed
                            ? <button onClick={()=> {
                                props.unfollow(u.id)
                            }
                            }>unfollow</button>
                            : <button onClick={()=> {
                                props.follow(u.id)
                            }
                            }>follow</button>}
                        </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users