import Post from "./Post";
import NewPost from './NewPost';

import classes from './PostList.module.css';

function PostList() {
    return <>
    <NewPost/>
    <ul className={classes.posts}>
        <Post author="David" message="Learning React!"/>
        <Post author="Angela" message="React!"/>
    </ul>
    </>
}

export default PostList;