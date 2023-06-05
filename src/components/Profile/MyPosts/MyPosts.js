import Post from "./Post/Post";
import s from './MyPosts.module.css';
import { NavLink } from "react-router-dom";

const MyPosts = (props) => {
 

  const postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likes={p.likesCount}/>)


  return (
    <div className={s.myPostsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements};

      </div>
    </div>
  )
}

export default MyPosts;