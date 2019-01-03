import React from 'react'
import styles from './PostList.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);

const PostItem = () => {
    return (
        <div className={cx('post-item')}>
            <h1>PostItem</h1>
        </div>
    )
}

const PostList = () => {
    const postList = posts.map(
        (post) => {
            return (
                <PostItem />
            )
        }
    );
    return (
        <div className={cx('post-list')}>
            {postList}
        </div>
    )
}

export default PostList;