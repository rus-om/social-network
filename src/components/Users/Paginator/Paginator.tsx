import React from "react";
import {LoadingSpinner} from "../LoadingSpinner";
import styles from './paginator.module.css'


type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (p: number) => void,
    currentPage: number,
}


export const Paginator = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (<div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => props.onPageChanged(p)}
                                 className={props.currentPage === p ? styles.selectedPage : ""}>
                             {p}
                        </span>
                })}
            </div>
        </div>
    )
}


export default Paginator